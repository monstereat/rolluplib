
/**
 * 空值校验
 * @param value 
 */

const isEmpty = (value: any): boolean => {
	return value === null || value === undefined || value === '';
}


/**
 * 校验手机号
 * @param phone 
 */
const isPhoneNumber = function (phone: string): boolean {
	const phoneRegex = /^1[3-9]\d{9}$/;
	return phoneRegex.test(phone);
}


/**
 * 校验身份证
 * @param idCard 
 */
const isIDCard = function (idCard: string): boolean {
	const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/;
	return idCardRegex.test(idCard);
}

/**
* 校验邮箱
* @param email 
*/
const isEmail = function (email: string): boolean {
	const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	return emailRegex.test(email);
}

/**
 * 校验企业注册号（统一社会信用代码）
 * @param companyCode 
 */
const isCompanyCode = function (companyCode: string): boolean {
	const companyCodeRegex = /^[A-Z0-9]{18}$/;
	return companyCodeRegex.test(companyCode);
}

/**
 * 校验邮政编码（中国）
 * @param postalCode 
 */
const isPostalCode = function (postalCode: string): boolean {
	const postalCodeRegex = /^[1-9]\d{5}(?!\d)$/;
	return postalCodeRegex.test(postalCode);
}

/**
 * 校验是否是数字
 * @param value 
 */
const isNumber = function (value: number): boolean {
	return !isNaN(value);
}


/**
 * 是否为小数
 * @param value 
 */
function isDecimal(value: string | number): boolean {
	const strValue = value.toString();
	const regex = /^\d+\.\d+$/;
	return regex.test(strValue);
}


/**
 * 校验是否保留一位小数
 * @param value 
 */
const isOneDecimal = function (value: string): boolean {
	const decimalRegex = /^\d+(\.\d{1})?$/;
	return decimalRegex.test(value);
}


/**
 *  校验是否保留两位小数
 * @param value 
 */
const isTwoDecimal = function (value: string): boolean {
	const decimalRegex = /^\d+(\.\d{1,2})?$/;
	return decimalRegex.test(value);
}

/**
 *  是否是正整数（不包括0）
 * @param value 
 */
function isIntInclZero(value: string | number): boolean {
	const strValue = value.toString();
	const regex = /^[0-9]+$/;
	return regex.test(strValue);
}

/**
 *  是否是正整数（包括0）
 * @param value 
 */
function isIntExclZero(value: string | number): boolean {
	const strValue = value.toString();
	const regex = /^[1-9][0-9]*$/;
	return regex.test(strValue);
}

export {
	isEmpty,
	isPhoneNumber,
	isIDCard,
	isEmail,
	isCompanyCode,
	isPostalCode,
	isNumber,
	isDecimal,
	isOneDecimal,
	isTwoDecimal,
	isIntInclZero,
	isIntExclZero

};