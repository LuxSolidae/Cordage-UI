// @flow
import * as React from 'react';
import ThemeContext from './Context';

import type { ThemeJSON } from './Context';

type Props = {
  theme?: ThemeJSON,
  /** React child components */
  children?: React.Node,
};

export const ThemeProvider = ({ theme: themeProp, children }: Props) => {
  const [theme, setTheme] = React.useState(themeProp);
  const changeTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  theme: {},
}

export default ThemeProvider;