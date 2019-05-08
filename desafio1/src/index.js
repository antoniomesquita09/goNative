import './config/ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Posts from './components/Posts';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Tonin tonin',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Tonin tonin',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Tonin tonindasdasdasdasdsadasdasdasdsadsadasdasdasddsd',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <ScrollView style={styles.container}>
        {posts.map(post => (
          <View key={post.id}>
            <Posts title={post.title} author={post.author} description={post.description} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6c90cc',
    paddingTop: 30,
    padding: 10,
  },
});
