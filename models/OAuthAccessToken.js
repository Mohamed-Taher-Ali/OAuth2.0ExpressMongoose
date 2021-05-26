const mongoose = require('mongoose');

const OAuthAccessTokenModel = mongoose.model('OAuthAccessToken', new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'OAuthClient' },
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    scope: { type: String }
},
    {
        timestamps: true
    }),
    'oauth_access_tokens');

module.exports = OAuthAccessTokenModel;