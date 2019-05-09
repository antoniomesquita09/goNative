import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Header from '../../Components/Header';
import styles from './styles';

class Issues extends Component {
  state = {
    issues: [],
    loading: true,
  };

  componentDidMount() {
    const { issues } = this.state;
    const { navigation } = this.props;
    const { data } = navigation.getParam('Issues', 'NO-ID');

    this.setState({ issues: data });
  }

  renderListItem = ({ item }) => <Text>{item.title}</Text>;

  render() {
    const { issues } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Issues" />
        <FlatList
          data={issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

export default Issues;
