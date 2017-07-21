import mongoose from 'mongoose';
import bluebird from 'bluebird';
import Config from 'config-lite';

let config = Config(__dirname);
const DB_URL = config.DB_URL;

// mongoose.Promise = bluebird;
mongoose.connect(DB_URL);

/* mongoose connection */
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + DB_URL);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

export default mongoose;