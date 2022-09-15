const router = require('express').Router()
const adminServices = require('../services/adminServices')
const isAdminAuth = require('../middlewares/isAdminAuth')

router.post('/authorize', async (req, res) => {
    try{
      let session = await adminServices.authorizeAdmin(req.body)
      res.json(session)
    }catch(err){
        res.status(403).json(err.message)
    }
})

router.post('/add', isAdminAuth, (req, res) => {
   adminServices.addAdmin(req.body)
   .then(() => res.json('Success!'))
   .catch(err => res.status(403).json({message : err.message}))
})

module.exports = router