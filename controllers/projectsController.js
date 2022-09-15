const router = require('express').Router()
const projectServices = require('../services/projectServices')
const isAdminAuth = require('../middlewares/isAdminAuth')

router.get('/get', (req, res) => {
    projectServices.getProjects(req.query.skip, req.query.limit, req.query.sort)
    .then((projectsData) => res.json(projectsData))
    .catch(err => res.status(404).json({message : 'Couldn\'t get the projects from the database..'}))
})

router.post('/add', isAdminAuth, (req,res) => {
    console.log(req.body)
    projectServices.addProject(req.body)
    .then(newProject => res.json(newProject))
    .catch(err => res.status(400).json({message:err.message}))
})

module.exports = router