const {model, Types, Schema} = require('mongoose')

const commentSchema = new Schema({
 author : {type : String, required: true},
 content : {type : String, required: true},
 forProject : {type : Types.ObjectId, ref : 'Project'}
}, {timestamps : true})

const Comment = model('Comment', commentSchema)
exports.Comment = Comment