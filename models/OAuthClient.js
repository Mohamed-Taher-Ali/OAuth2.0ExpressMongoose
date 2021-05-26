const mongoose = require('mongoose');

const OAuthClientModel = mongoose.model('OAuthClient', new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
    grants: { type: Array },
},
    {
        timestamps: true
    }),
    'oauth_clients');

module.exports = OAuthClientModel;