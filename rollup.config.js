import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import babel from "rollup-plugin-babel";
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

export default [{
  input: 'src/index.ts', // 打包入口
  output: { // 打包出口
    name: 'bstools',
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    exports: 'auto'
  },
  plugins: [ // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }), //js代码检测
    babel({
      exclude: 'node_modules/**',
      // 使plugin-transform-runtime生效
      runtimeHelpers: true,
    }),  // 编译es next
    terser(), // 压缩代码
    ]
  },
  {
    input: 'src/index.ts',
    external: ['ms'],
    plugins: [
      typescript()
    ],
    output: [
      {  file: pkg.main, format: 'cjs', exports: 'auto' },
      {  file: pkg.module, format: 'es', exports: 'auto' }
    ]
  }
];