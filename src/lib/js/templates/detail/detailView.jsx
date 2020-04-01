import * as React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import locations from '@_src_/lib/img/icons/locations.svg';

import { Page, Sidebar, SidebarContext } from '@cordage_ui';
import type { Props as PageProps } from './Page';
import type { Props as SidebarProps } from './Siebar';


export type Props = {
  /** Same props as Page... */
  ...PageProps,
  /** Same props as Siebar... */
  ...SidebarProps,
}

export const DetailView = ({
title, description, logo
}: Props) => (

    <div className="metro d-flex">
      <SidebarContext.Provider>
        <Router history={typeof window !== 'undefined' ? createBrowserHistory() : null}>
          <Sidebar.Menu logo={{ src: {logo}, alt: 'Cordage' }} zone='Admin'>
            <Sidebar.Select
              defaultSelected={3}
              options={[
                { key: 1, text: 'Location 123', icon: locations },
                { key: 2, text: 'Location 124', icon: locations },
                { key: 3, text: 'Location 125', icon: locations },
              ]}
            />
          </Sidebar.Menu>
        </Router>
      </SidebarContext.Provider>
      <Page.Administrative
        title={title}
        description={description}
      >
        <Page.Content
          title='Example title'
        >
          <div>Example text</div>
        </Page.Content>
      </Page.Administrative>
  </div>
);

export default DetailView;

