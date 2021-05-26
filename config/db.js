const
mongoose = require('mongoose'),
env = require('./env');


module.exports = (() => {
    if (env.isProduction) {
        mongoose.connect(env.mongoDbUrl);
    } else {
        mongoose.connect('mongodb://localhost/oauth', { useNewUrlParser: true });
        mongoose.set('debug', true);
    }

    mongoose.set('useCreateIndex', true);

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB error: '));
    db.once('open', console.log.bind(console, 'MongoDB connection successful'));
})()