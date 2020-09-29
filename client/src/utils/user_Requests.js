const {default: axios} = require('axios')
const baseURL = 'http://localhost:2000'

const validator = require("validator")

module.exports = {
  loginReq: async (values) => {

    const
    reqBody = {},
    fieldErrors = {};

    for (const key in values) {
      
      const val = values[key];

      if (key === "credential" && (val.length < 3 || val.length > 254)) {

        fieldErrors[key] = "\nInvalid length, must be between 3 and 254 characters"

      }

      if (key === "password" && (val.length < 7 || val.length > 1000)) {

        fieldErrors[key] = "\nInvalid lengt, must be between 7 and 1000 characters"

      }

    }

    if (Object.entries(fieldErrors).length !== 0) {

      let errStr = "";

      for (const field in fieldErrors) {

        errStr += `\nError in field: ${field !== "credential" ? field : "username or email"} - ${fieldErrors[field]}`

      }

      console.log(errStr);

      alert(errStr);

      return

    } else {

      for (const key in values) {
        
        reqBody[key] = values[key]

      }

    }

    const loginURL = `${baseURL}/user/login`

    await axios.put(loginURL, reqBody)
    .then(res => {
      console.log(res);
      sessionStorage.setItem('user', res.data.user)
      window.location = '/'
    })
    .catch(err => {
      if (err) {
        console.log("Login Failed");
      }
    })

  },
  regReq: async (values) => {
    
    const
    reqBody = {},
    fieldErrors = {};

    for (const key in values) {
      
      const val = values[key];

      if (key === "email") {

        if (val.length < 6 || val.length > 254) {

          fieldErrors["email"] = "\nEmail length must be between 6 and 254 characters"

        } else if (!validator.isEmail(val)) {

          fieldErrors["email"] = "\nMust enter a valid email"

        }
      }
      
      if (key === "username") {

        if (val.length < 3 || val.length > 21) {

          fieldErrors["username"] = "\nUsername length must be between 3 and 21 characters"

        } 
      }

      if (key === "password") {

        if (val.length < 7 || val.length > 1000) {

          fieldErrors[key] = "\nInvalid length: must be between 7 and 1000 characters"

        }
      }
      
      if (key === "confirm_pass") {

        if (val.length < 7 || val.length > 1000) {

          fieldErrors[key] = "\nInvalid length: must be between 7 and 1000 characters"

        }
      }

    }

    if (values['confirm_pass'].value !== values['password'].value) {

      fieldErrors["password_match"] = "\nPasswords don't match"

    }

    if (Object.entries(fieldErrors).length !== 0 ) {

      let errStr = "";

      for (const field in fieldErrors) {

        errStr += `\nError in field: ${field !== "credential" ? field : "username or email"} - ${fieldErrors[field]}`

      }

      console.log(errStr);

      alert(errStr);

      return

    } else {

      for (const key in values) {
        
        if (key !== "confirm_pass")
          reqBody[key] = values[key]

      }

    }

    console.log(reqBody);

    const registerURL = `${baseURL}/user/register`;

    await axios.post(registerURL, reqBody)
    .then(res => {
      console.log(res);
      sessionStorage.setItem('user', res.data.username)
      window.location = '/'
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }
    })

  }
}