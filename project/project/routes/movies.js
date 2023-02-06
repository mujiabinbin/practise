var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
    console.log(req.query);
  res.send({ title: 'movielsit',status:1 });
});

module.exports = router;