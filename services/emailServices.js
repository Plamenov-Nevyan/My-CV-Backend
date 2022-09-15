const nodemailer = require('nodemailer')
const fetch = require('node-fetch')
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    port: 2525,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GooglePass
    },
  });

const sendEmail = (emailData) => {
  let mailOptions = {
    from : emailData.email,
    to : 'plamenovnevyan@gmail.com',
    subject : emailData.subject,
    html : `
    <h3>From :  ${emailData.email}</h3>
    <h4>Hi, i'm ${emailData.name}</h4>
    <p>${emailData.message}</p>
    `
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        throw {message : err.message}
    }

    console.log(info.response)
  })

}

 const checkIfEmailExists = async (email) => {
  let resp = await fetch(`https://api.emailable.com/v1/verify?email=${email}&api_key=${constants.EmailVerificationKey}`)
  let data = await resp.json()
  if(data.state !== 'deliverable'){
      throw {
          message : `Email adress doesn\'t exist or it\'s unsafe to use!`
      }
  }
}

module.exports = {
    sendEmail,
    checkIfEmailExists
}