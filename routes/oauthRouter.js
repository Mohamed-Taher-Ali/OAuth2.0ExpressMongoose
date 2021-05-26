const
    OAuthServer = require('express-oauth-server'),
    OAuthModel = require('../controllers/oauth'),
    router = require('express').Router(),
    mongoose = require('mongoose');

const oauth = new OAuthServer({
    model: OAuthModel,
    useErrorHandler: true,
    debug: true,
});

router.post('/oauth/access_token', oauth.token({
    requireClientAuthentication: { authorization_code: false }
}));

router.get('/oauth/authenticate', async (req, res, next) => {
    return res.render('authenticate')
});

router.post('/oauth/authenticate',
    (async (req, res, next) => {
        let UserModel = mongoose.model('User');
        req.body.user = await UserModel.findOne({ username: req.body.username });
        return next();
    }),
    oauth.authorize({
        authenticateHandler: {
            handle: req => {
                return req.body.user;
            }
        }
    }),
    (req, res) => {
        return res.send(req.body)
    }
);

router.post('/oauth/callback', async (req, res) => {
    return res.send(req.body)
});


router.use('/secured/profile', oauth.authenticate(), (req, res) => {
    return res.render('secured', { token: JSON.stringify(res.locals) });
});

module.exports = router;