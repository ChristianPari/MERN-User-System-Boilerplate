module.exports = (darkTheme) => {
  return {
    root: {
      backgroundColor: darkTheme? 'black' : 'white'
    },
    text: {
      color: darkTheme? 'white' : 'black'
    },
    btn: {
      color: darkTheme? 'white' : 'black',
      backgroundColor: darkTheme? 'black' : 'white'
    },
    input: {
      color: darkTheme? 'black' : 'white',
      backgroundColor: darkTheme? 'white' : 'black'
    }
  }
}