/**
 *  车牌校验
 * @param plateNumber 
 */

function isLicensePlate(plateNumber: string): boolean {
	const regex = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
	return regex.test(plateNumber);
}

/**
 *  车牌校验
 * @param vin 
 */

const isVIN = function (vin: string): boolean {
	const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
	return vinRegex.test(vin);
}

/**
 *  车牌校验
 * @param engineNumber 
 */
const isEngineNumber = function (engineNumber: string): boolean {
	const engineNumberRegex = /^[A-Za-z0-9]{6,20}$/;
	return engineNumberRegex.test(engineNumber);
}

function Rad(d: number) { //根据经纬度判断距离
	return d * Math.PI / 180.0;
}

/**
 *  计算两个经纬度距离
 * @param lat1 
 */
 function getDistance(lat1:any, lng1:any, lat2: any, lng2:any): string {
	// lat1用户的纬度
	// lng1用户的经度
	// lat2商家的纬度
	// lng2商家的经度
	lat2 = Number(lat2)
	lng2 = Number(lng2)
	var radLat1 = Rad(lat1);
	var radLat2 = Rad(lat2);
	var a = radLat1 - radLat2;
	var b = Rad(lng1) - Rad(lng2);
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math
		.pow(Math.sin(b / 2), 2)));
	s = s * 6378.137;
	s = Math.round(s * 10000) / 10000;
	if (s < 1) {
		s = s * 1000
		s = s.toFixed(0) as any 
		s = s + 'M' as any
	} else {
		s = s.toFixed(2) + 'KM' as any//保留两位小数
	}
	console.log('经纬度计算的距离:' + s)
	return s as any
}


export {
	isLicensePlate,
	isVIN,
	isEngineNumber,
	getDistance
}