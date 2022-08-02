var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Mobile Phone Number Validator Server' });
});

const {phone} = require('phone');

router.get('/phone/:phone', async (req, res, next) => {
  try{
      var chk = phone(req.params.phone);
      if (chk == null) {
        res.send('unexpected error');
      }
      else {
        res.send(chk);
      }
      
  } catch(err){
      console.error('Failed to return content', err);
  }
});

module.exports = router;