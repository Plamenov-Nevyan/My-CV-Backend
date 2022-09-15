const router = require('express').Router()
const emailServices = require('../services/emailServices')

router.post('/send', async (req, res) => {
   try{
    await emailServices.checkIfEmailExists(req.body.email)
    emailServices.sendEmail(req.body)
    res.json({message : 'Success'})
   }catch(err){
    res.status(400).json({message : err.message})
   }
})

module.exports = router