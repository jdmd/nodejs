'use strict';

var hdb = require('hdb');
var async = require('async');
var options = {
	host: "lt5085.wdf.sap.corp",
	port: "31015",
	user: "DEV162_DEMO",
	password: "Welcome15"
};

module.exports = {
	callHANA1: function(cb) {
		var client = hdb.createClient(options);
		client.connect(function(cb) {
			console.log('Database Connected');
			client.exec('select * from SYS.M_SYSTEM_OVERVIEW',
				function(err, res, cb) {
					if (err)
						return ("ERROR: " + err);
					console.log("Database Call Complete 1");
					for (var i = 0; i < res.length; i++) {
						console.log(res[i].NAME + ": " + res[i].VALUE + "\n");
					}
					client.disconnect(function(cb) {console.log('Database Disconnected'); });
					// cb();
				});
			//cb();
		});
		cb();
	},
	callHANA2: function(cb) {
		var client = hdb.createClient(options);
		client.connect(function(cb) {
			console.log('Database Connected 2');
			client.exec('select * from SYS.M_SYSTEM_OVERVIEW',
				function(err, res, cb) {
					if (err)
						return ("ERROR: " + err);
					console.log("Database Call Complete");
					for (var i = 0; i < res.length; i++) {
						console.log(res[i].NAME + ": " + res[i].VALUE + "\n");
					}
					client.disconnect(function(cb) {console.log('Database Disconnected'); });
					// cb();
				});
			//cb();
		});
		cb();
	}
};