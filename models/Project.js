const {model, Types, Schema} = require('mongoose')

const projectSchema = new Schema({
  link : {type : String},
  previewImg : {type : String},
  projectName : {type : String},
  description : {type: String, maxLength : 250},
  deployment : {type : String},
  tags : []
}, {timestamps : true})

const Project = model('Project', projectSchema)
exports.Project = Project