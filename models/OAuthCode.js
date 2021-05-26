const mongoose = require('mongoose');

const OAuthCodeModel = mongoose.model('OAuthCode', new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'OAuthClient' },
    authorizationCode: { type: String },
    expiresAt: { type: Date },
    scope: { type: String }
}, {
    timestamps: true
}), 'oauth_auth_codes');


module.exports = OAuthCodeModel;