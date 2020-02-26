// @flow
import * as React from 'react';

type SidebarContextType = {
  open?: boolean,
  toggleOpen?: () => void,
  accordion?: string,
  toggleAccordion?: (accordionID: string) => void,
};

export const SidebarContext = React.createContext<SidebarContextType>({
  open: true,
  toggleOpen: undefined,
  accordion: undefined,
  toggleAccordion: undefined,
});

export default SidebarContext;
