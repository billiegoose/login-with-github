"use strict"
const express = require('express')
const oauth = require('@wmhilton/login-with-github-route-handler')
let app = express()
// The user is redirected from Github to this URL.
// The state and access code will be in a query parameters.
// This route handler exchanges the access code for an access token.
// Then it returns an HTML page containing the access token and
// this page transmits it back to the parent window via window.postMessage
app.get('/login/oauth/redirect', oauth({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  authorization_url: 'https://github.com/login/oauth/access_token'
}))
app.listen(process.env.PORT || 80)
