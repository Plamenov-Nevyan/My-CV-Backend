const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcrypt")
const { Admin } = require ("../models/Admin")

const authorizeAdmin = async (data) => {
  try{
    let [isEmailCorrect, isUsernameCorrect] = await Promise.all([
        Admin.findOne({email: data.email}).lean(),
        Admin.findOne({username: data.username}),
    ])
    if(isEmailCorrect && isUsernameCorrect){
        let isPassCorrect = await bcrypt.compare(data.password, isEmailCorrect.password)
        if(isPassCorrect){
           let session = createAdminSession({email : isEmailCorrect.email, _id : isEmailCorrect._id})
           return session
        }
        else{
          throw {message : 'You are unauthorized to access admin functionalities !'}
        }
    }
    else{
        throw {message : 'You are unauthorized to access admin functionalities !'}
    }
  }catch(err){
    throw err
  }
}

const addAdmin = async (data) => {
    let hashedPass = await bcrypt.hash(data.password, process.env.saltRounds)
    return Admin.create({
        ...data,
        password: hashedPass
    })
}

const createAdminSession = (adminData) => {
  console.log(process.env.jwtSecret)
   let accessToken = jwt.sign({...adminData}, process.env.jwtSecret, {expiresIn:'1d'})
   return {
    email : adminData.email,
    _id : adminData._id,
    accessToken
   }
}

module.exports = {
    authorizeAdmin,
    addAdmin
}