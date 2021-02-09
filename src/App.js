import React from 'react';
import FunctionCTX from './FunctionCTX';
import {ThemeProvider} from './ThemeCTX';

export const ThemeCTX = React.createContext();

function App() {
  return (
    <>
    <ThemeProvider>
      <FunctionCTX />
      </ThemeProvider>
    </>
  );
}

export default App;
