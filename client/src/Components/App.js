// packages
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import useLocalStorage from '../Hooks/useLocalStorage';

// import Components
import AppRouter from './AppRouter'

function App() {
  // using custom hook to save the theme in local storage
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // function to be passed down to through the props into the PageOptions component which has buttons that handle the theme changing
  const themer = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // handle the chaning of the page backgrounf depending on the theme style
  const siteBGcolor = theme === 'light' ? 'white' : 'black';
  document.getElementById('root').style.backgroundColor = siteBGcolor;

	return (
		<BrowserRouter>
			<AppRouter 
        theme={theme}
        themer={themer}
      />
		</BrowserRouter>
	);
}

export default App;