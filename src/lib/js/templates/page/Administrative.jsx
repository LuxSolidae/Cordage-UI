// @flow
import * as React from 'react';
import { Grid } from './../../atoms';

type Props = {
  children: React.Node,
  title: string,
  description?: string,
};

export const Administrative = ({ children, title, description }: Props) => (
  <div className='page page-administrative'>
    <div className='page-header'>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <h1>{title}</h1>
            {
              description && (
                <p>{description}</p>
              )
            }
          </Grid.Col>
          <Grid.Col>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
    {children}
  </div>
);

Administrative.defaultProps = {
  description: undefined,
};

export default Administrative;
