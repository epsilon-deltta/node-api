var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  return res.json(users) ;
});
let users=[{id:1,name:"jame"},{id:2,name:"longhao"}]

module.exports = router;
