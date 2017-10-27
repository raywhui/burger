var express = require('express');
var burger = require('../models/burger.js');

//difference between router and app
var router = express.Router();

router.get('/', function(req,res){
	burger.all(function(data){
		var controllerToIndex = {
			burgers: data
		};

		res.render('index', controllerToIndex);
		console.log('burgers_control:', controllerToIndex)
	});
});

router.post('/api/burgers', function(req,res){
	var burgerName = req.body.burger_name;
	console.log(burgerName);
	burger.create(burgerName,function(data){
		res.json({ data });
	});
});

router.put('/api/burgers', function(req,res){
	var id = req.body.id;
	console.log('id:', id);
	burger.update(id, function(data){
		res.json({ data });
	});
});



module.exports = router;