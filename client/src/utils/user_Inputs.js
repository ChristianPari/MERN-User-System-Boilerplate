// a file containing useful input data to be used dynamically

const loginInputs = [
  {
    ph: "Email or Username",
    name: "credential",
    type: "text"
  },
  {
    ph: "Password",
    name: "password",
    type: "password"
  }
]

const  regInputs = [
  {
    ph: "Email",
    name: "email",
    type: "email"
  },
  {
    ph: "Username",
    name: "username",
    type: "text"
  },
  {
    ph: "Password",
    name: "password",
    type: "password"
  },
  {
    ph: "Confirm Password",
    name: "confirm_pass",
    type: "password"
  }
]

module.exports = {
  loginInputs,
  regInputs
}