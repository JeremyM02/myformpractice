var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    _pageColor: "#F9F9F9",
    _textColor: "#020202",
    _eventName: "Halloween",
    _startDate: "2021-10-31T16:30",
    _recipients: "30",
    _eventNumber: "559-123-4567"
  });
});

router.post('/result', function(req, res) {
  res.render('results', {
    color: req.body.colorPicker
  })
});
module.exports = router;
