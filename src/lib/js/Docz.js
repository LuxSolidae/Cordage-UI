import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import * as React from 'react';
import '@_src_/lib/Docz.css';

const Wrapper = ({ children }) => (
  <React.Fragment>
    { children }
  </React.Fragment>
);

export default Wrapper;
