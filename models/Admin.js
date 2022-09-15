const {model, Types, Schema} = require('mongoose')

const adminSchema = new Schema({
 email : {type : String, required: true},
 username : {type : String, required: true},
 password : {type: String, required: true}
}, {timestamps : true})

const Admin = model('Admin', adminSchema)
exports.Admin = Admin