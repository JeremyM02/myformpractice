var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/result', function(req, res) {
  res.render('results', {
    color: req.body.colorPicker
  })
});
module.exports = router;
