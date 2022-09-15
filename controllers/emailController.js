const router = require('express').Router()
const emailServices = require('../services/emailServices')

router.post('/send', async (req, res) => {
try{
   let isEmailValid =  await emailServices.checkIfEmailExists(req.body.email)
   if(isEmailValid.message === 'Success'){
      emailServices.sendEmail(req.body)
      res.json({message : 'Success'})
   }
   else {
      throw {message : isEmailValid.message}
   }
}
catch(err){
      res.status(400).json({message : err.message})
    }
})

module.exports = router