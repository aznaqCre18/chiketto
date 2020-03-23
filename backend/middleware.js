
// const isLoggedIn = true
const expressJwt = require('express-jwt')
//Dummy authenticated middleware

exports.authenticated = expressJwt({ secret: 'my-secret-key' })