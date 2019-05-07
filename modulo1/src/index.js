import './config/ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import './config/DevToolsConfig';

import Todo from './components/Todo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="Hello world" />
        <Todo title="Fazer cafe" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
