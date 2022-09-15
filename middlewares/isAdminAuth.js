const jwt = require('jsonwebtoken')
const constants = require('../config/constants')

module.exports = (req, res, next) => {
    let accessToken = req.headers['x-authorization']
    if(accessToken){

        jwt.verify(accessToken, constants.jwtSecret, function(err, payload){
            if(err){res.status(403).json({message:err.message})}
            req.admin = {
                email: payload.email,
                _id: payload._id,
                accessToken
            }
        })
        next()
    }
    else {
        res.status(403).json({message : 'This action is uanuthorized !'})
    }
}