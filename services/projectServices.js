const {Comment} = require('../models/Comment')
const {Project} = require('../models/Project')

const getProjects = async (skip, limit, sort) => {
   let [projects, count]= await Promise.all([
    Project.find()
    .skip(Number(skip))
    .limit(Number(limit))
    .sort({createdAt: sort === 'recent' ? 'desc' : 'asc'})
    ,
    getTotalCount()
   ])
return {projects, pages : Math.ceil(count / Number(limit))}
}

const getTotalCount = () => Project.countDocuments().exec()

const addProject = (data) => Project.create({...data})

module.exports = {
   getProjects,
   getTotalCount,
   addProject
}