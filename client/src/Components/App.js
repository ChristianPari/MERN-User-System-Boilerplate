// packages
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

// import Components
import AppRouter from './AppRouter'

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;