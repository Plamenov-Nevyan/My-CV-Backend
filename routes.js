const router = require('express').Router()
const projectsController = require('./controllers/projectsController')
const commentsController = require('./controllers/commentsController')
const adminController = require('./controllers/adminController')
const emailController = require('./controllers/emailController')

router.use('/admin', adminController)
router.use('/projects', projectsController)
router.use('/comments', commentsController)
router.use('/email', emailController)

module.exports = router