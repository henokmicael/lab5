var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inventors', function(req, res, next) {
  res.render('inventor', { data: data });
});

module.exports = router;
