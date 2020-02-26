// @flow
import * as React from 'react';

export type ThemeJSON = {
  sidebar: {
    main: {
      backgroundColor: string;
      color: string;
    },
    toggler: {
      backgroundColor: string,
    }
  }
};

type ThemeContextType = {
  theme?: ThemeJSON,
  changeTheme?: (theme: ThemeJSON) => void,
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: {},
  changeTheme: undefined,
});

export default ThemeContext;
