// @flow
import * as React from 'react';
import SidebarContext from './Context';

type Props = {
  open?: boolean,
  accordion?: string,
  /** React child components */
  children?: React.Node,
};

export const SidebarProvider = ({ open: openProp, accordion: accordionProp, children }: Props) => {
  const [open, setOpen] = React.useState(openProp);
  const [accordion, setAccordion] = React.useState(accordionProp);
  const toggleOpen = () => setOpen(!open);
  const toggleAccordion = (id: string) => setAccordion(accordion === id ? undefined : id);

  return (
    <SidebarContext.Provider
      value={{
        open,
        toggleOpen,
        accordion,
        toggleAccordion,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.defaultProps = {
  open: true,
}

export default SidebarProvider;