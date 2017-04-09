var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
console.log(req.query.name);
  fs.readFile(path.join('./public/inventor.json'),function (err,data) {
  //  console.log(JSON.parse(data));
    data=JSON.parse(data);
  res.render('index', { data: data });
});
});

module.exports = router;
