var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pagosMP', function(req, res, next) {
  var MP = require ("mercadopago");
  
  var mp = new MP ('TEST-4878048892163147-113014-2ae0d006aacfca052ae6e76f1b3bb1d0__LC_LD__-261861182');
      
  var filters = {
      "id": null,
      "site_id": null,
      "external_reference": null
  };

  mp.searchPayment (filters)
  .then (
      function success (data) {
        //   console.log (JSON.stringify (data, null, 4));
          res.send(JSON.stringify (data, null, 4))
      },
      function error (err) {
        //   console.log (err);
      }
  );
  
});


module.exports = router;
