import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Posts = ({ title, author, description }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.titleText}>{title}</Text>
      <Text>{author}</Text>
    </View>
    <Text>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 10,
    marginBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
  },
});

export default Posts;
