var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About us Page. */
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About Us' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('Projects', { title: 'Projects Page' });
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact Us' });
});
module.exports = router;

