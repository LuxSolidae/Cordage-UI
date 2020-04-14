// @flow
import * as React from 'react';
import { Grid } from './../../atoms';

type Props = {
  children: React.Node,
  title: string,
  /**May add any component next to the header. Should be inside a fragment. */
  headerComponents?: React.Node,
  description?: string,
};

export const Administrative = ({ children, title, description, headerComponents }: Props) => (
  <div className='page page-administrative'>
    <div className='page-header'>
      <Grid.Container className='pg-container'>
        <Grid.Row>
          <Grid.Col>
            <div>
              <div className='page-admin-header'>
                <h1>{title}</h1>
                {
                  description && (
                    <p>{description}</p>
                  )
                }
            </div>
          </div>
          </Grid.Col>
          <Grid.Col>
          {
            headerComponents && (
              <div className='page-admin-header-extra'>
                  <span>{headerComponents}</span>
              </div>
              )
          }
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
