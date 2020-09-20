// packages
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

// import Components
import AppRouter from './AppRouter'
import { ThemeProvider } from '../Hooks/themeContext'

export default function App() {
	return (
    <ThemeProvider>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
	);
}