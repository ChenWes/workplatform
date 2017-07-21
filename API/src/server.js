'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Config from 'config-lite';
import logger from 'morgan';

// import userRoutes from './api/routes/userRoutes';

let app = express();
let config = Config(__dirname);
let port = config.port;

/* CORS */
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	if (req.method == 'OPTIONS') {
		res.send(200);/*让options请求快速返回*/
	}
	else {
		next();
	}
});

/* Basic Setting */
app.use(logger('dev'));
app.use(bodyParser.json({ "limit": "10000kb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/* routes */
let userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

/* Not Found */
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
})

/* Handling Error */
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500).end();
});


/* Start Server */
if (module.parent) {
	module.exports = app;
} else {
	app.listen(config.port, () => {
		console.log(`workplatform API server started on:${config.port} `);
	});
}