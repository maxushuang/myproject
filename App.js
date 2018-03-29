/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Store from './src/store';
import Root from './src';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store = {Store}>
        <Root></Root>
      </Provider>
    );
  }
}
