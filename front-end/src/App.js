import React from 'react';
import { ThemeProvider } from 'styled-components';
import Switch from 'react-switch';

import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{zIndex: 2, top: 20, right: 20, position: 'fixed'}}>
        <Switch
        onChange={toggleTheme}
        checked={theme.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        handleDiameter={20}
        offHandleColor={theme.colors.secondary}
        offColor={theme.colors.primary}
        onHandleColor={theme.colors.primary}
        onColor={theme.colors.secondary}
        />
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
