const router = require('express').Router()
const emailServices = require('../services/emailServices')

router.post('/send', async (req, res) => {
    emailServices.checkIfEmailExists(req.body.email)
    .then(() => {
      emailServices.sendEmail(req.body)
      res.json({message : 'Success'})
    })
   .catch(err =>  res.status(400).json({message : err.message})) 
})

module.exports = router