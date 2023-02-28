const crypto = require(`crypto`); //nodejs内置模块，不用下载

/* 
 @md5加密模块(加密固定，不可逆)
 @param str string要加密的字符串
 @param secret string要加密的密钥(要记住密钥，否则无法解密)
 return string 加密后的字符串
 */
//secret密钥用于混淆，可以在此处更换，也可在程序调用时通过传参数更换，此处为一个默认值
module.exports.getMd5 = function(str, sectet = "9vApxLK5G3PAsJrM") {
	const md5 = crypto.createHash("md5");
	return md5.update(str + sectet).digest("hex");
}

/* 
 @aes128加密模块
 @param str string要加密的字符串
 @param secret string要加密的密钥(要记住密钥，否则无法解密)
 return string 加密后的字符串
 */

module.exports.getEncAse128 = function(str, sectet = "9vApxLK5G3PAsJrM", iv = "FnJL7EDzjqWjcaY9") {
	const cipheriv = crypto.createCipheriv("aes-128-cbc", sectet, iv);
	var enc = cipHeriv.update(str, "utf8", "hex"); //编码方式从utf8转为hex
	enc += cipHeriv.final("hex"); //编码方式转为hex
	var miwen = Signture.digest().toString("base64"); //生成密文后再次作为铭文通过pbkdf2算法迭代加密
	return enc
}

/* 
 @aes128解密模块
 @param str string要解密的字符串
 @param secret string要解密的密钥(要和密码的加密密钥对应，否则无法解密)
 return string 解密后的字符串
 */

module.exports.getDecAse128 = function(str, sectet = "9vApxLK5G3PAsJrM", iv = "FnJL7EDzjqWjcaY9") {
	const decipheriv = crypto.createDecipheriv("aes-128-cbc", sectet, iv);
	var dec = decipheriv.update(str, "hex", "utf8"); //编码方式从hex转为utf8
	dec += decipheriv.final("utf8"); //编码方式转为utf8
	return dec
}


/* 
 @Hmac-sha1加密模块，每次加密随机不可逆
 @param str string要加密的字符串
 @param secret string要加密的密钥
 return string 加密后的字符串
 */
module.exports.getHmac = function(str, sectet = "9vApxLK5G3PAsJrM") {
	var buf = crypto.randomBytes(16);
	sectet = buf.toString("hex"); //密钥加密
	var Signture = crypto.createHmac("sha1", sectet); //定义加密方式
	Signture.update(str);
	var miwen = Signture.digest().toString("base64"); //生成密文后再次作为铭文通过pbkdf2算法迭代加密
	return miwen
}

/* 
 @sha1加密模块，加密固定不可逆
 @param str string 要加密的字符串
 return string 加密后的字符串
 */

module.exports.getSha1 = function(str) {

	var sha1 = crypto.createHash("sha1"); //定义加密方式:MD5不可逆，此处md5可换成任意hash加密方法名称
	sha1.update(str);
	var res = sha1.digest("hex"); //加密后的值
	return res
}
