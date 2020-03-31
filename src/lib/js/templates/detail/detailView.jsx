import * as React from 'react';
import { ThemeContext, Page, Sidebar, SidebarContext } from '@cordage_ui';


export const DetailView = () => {

  return(
    <Page.Administrative
        title='Collections'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis metus vitae elit lacinia dapibus at sed nibh. In hac habitasse platea dictumst. Etiam condimentum orci justo. Fusce nec augue leo.'
      >
        <Page.Content
          title='Example title'
        >
          <div>Example text</div>
        </Page.Content>
      </Page.Administrative>
  );
}

export default DetailView;

