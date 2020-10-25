var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* GET home page. */
router.get('/', function(req, res, next) {
  var xmlhr = new XMLHttpRequest();
  xmlhr.open("GET", "http://62.210.247.201:9000/test",true);
  xmlhr.addEventListener("load", function() {
  	if (xmlhr.status >= 200 && xmlhr.status < 400){
  		console.log(JSON.parse(xmlhr.responseText)[0]);
  		res.render('index', {data: JSON.parse(xmlhr.responseText)});
    } 
    else {
    	console.error(xmlhr.status + " " + xmlhr.statusText);
    }
  });
  xmlhr.addEventListener("error", function () {
  	console.error("Erreur réseau");
  });
  xmlhr.send(null);
});

module.exports = router;
