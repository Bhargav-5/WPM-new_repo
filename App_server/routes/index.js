var express = require('express');
var router = express.Router();

var homepageController = function(req,res){
  res.render('index',{title:'Welcomed to AI-B class'});
};
router.get('/',homepageController)
module.exports = router;

// // /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
