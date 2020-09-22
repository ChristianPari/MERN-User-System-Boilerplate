const {default: axios} = require('axios')
const baseURL = 'http://localhost:2000'

const validator = require("validator")

module.exports = {
  loginReq: async (form) => {

    const
    reqBody = {},
    fieldErrors = {};

    for (const input of form) {
      
      const val = input.value;

      if (input.name === "credential" && (val.length < 3 || val.length > 254)) {

        fieldErrors[input.name] = "\nInvalid length, must be between 3 and 254 characters"

      }

      if (input.name === "password" && (val.length < 7 || val.length > 1000)) {

        fieldErrors[input.name] = "\nInvalid lengt, must be between 7 and 1000 characters"

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

      for (const input of form) {
        
        reqBody[input.name] = input.value

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
  regReq: async (form) => {
    
    const
    reqBody = {},
    fieldErrors = {};

    for (const input of form) {
      
      const val = input.value;

      if (input.name === "email") {

        if (val.length < 6 || val.length > 254) {

          fieldErrors["email"] = "\nEmail length must be between 6 and 254 characters"

        } else if (!validator.isEmail(val)) {

          fieldErrors["email"] = "\nMust enter a valid email"

        }
      }
      
      if (input.name === "username") {

        if (val.length < 3 || val.length > 21) {

          fieldErrors["username"] = "\nUsername length must be between 3 and 21 characters"

        } 
      }

      if (input.name === "password") {

        if (val.length < 7 || val.length > 1000) {

          fieldErrors[input.name] = "\nInvalid length: must be between 7 and 1000 characters"

        }
      }
      
      if (input.name === "confirm_pass") {

        if (val.length < 7 || val.length > 1000) {

          fieldErrors[input.name] = "\nInvalid length: must be between 7 and 1000 characters"

        }
      }

    }

    if (form[3].value !== form[2].value) {

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

      for (const input of form) {
        
        if (input.name !== "confirm_pass")
          reqBody[input.name] = input.value

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