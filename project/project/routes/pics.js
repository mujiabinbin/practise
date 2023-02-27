var express = require('express');
var router = express.Router();
const {
	uploadfiles
} = require(`../utils/handlefiles`)

router.post('/upload', async function(req, res, next) {
	const upload = uploadfiles({
		path: `./public/img`, //相对于app.js路径，图片上传后存储路径
		key: `file`, //匹配前端formdata.append(`file`, files[0])第一个参数;
		size: 1000 //单位kb
	})
	upload(req, res, (err) => {
		if (err) {
			console.log(`pic upload failed`)
		} else {
			console.log(`pic upload success`, req.files)
		}
	})
});

module.exports = router;
