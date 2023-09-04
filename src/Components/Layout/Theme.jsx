'use client'

import { ThemeProvider, createTheme } from '@mui/material'
import Navbar from './Navbar/Navbar'
import AuthWrapper from '../Auth/AuthWrapper';

const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#c1e8e9',
    //   main: '#79cbcf',
    //   dark: '#47b8bd',
    //   contrastText: '#fff',
    // }
    primary: {
      light: '#fbd9d6',
      main: '#f5b3ad',
      dark: '#ed8074',
      contrastText: '#fff',
    }
  }
});

const Theme = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthWrapper>
          {children}
        </AuthWrapper>
      </ThemeProvider>
    </>
  )
}

export default Theme