import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Signup from './components/Signup';
import { StateProvider } from './components/StateProvider';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css';

const theme = createTheme();

export default function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Container>
          <CssBaseline />
          <Signup />
        </Container>
      </StateProvider>
    </ThemeProvider>
  );
}
