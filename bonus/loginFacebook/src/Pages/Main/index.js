import React, { Component } from 'react';

import {
  View, StatusBar, TouchableHighlight, Text, ActivityIndicator,
} from 'react-native';

import { facebookLogin } from '../../Services/Auth';
import styles from './styles';

export default class Main extends Component {
  state = {
    error: null,
    loading: false,
  };

  handleLoginWithFacebook = async () => {
    const response = await facebookLogin();

    if (response.error) {
      this.setState({ error: response.error });
    }
  };

  render() {
    const { error, loading } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.box}>
          {!!error && <Text style={styles.error}>{error}</Text>}
          <TouchableHighlight onPress={this.handleLoginWithFacebook} style={styles.buttonContainer}>
            {!loading ? (
              <Text style={styles.buttonText}>Entrar com o Facebook</Text>
            ) : (
              <ActivityIndicator size="small" color="#fff" />
            )}
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
