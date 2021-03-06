// use module exports to use middleware

var middleware = {
	requireAuthentification: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger : function (req, res, next) {
		console.log('Request : ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;