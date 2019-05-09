import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../../services/api';
import styles from './styles';

class RepositoryItem extends Component {
  state = {
    loading: false,
  };

  renderIssues = async () => {
    const { repository, navigation } = this.props;

    this.setState({ loading: true });

    try {
      const { data } = await api.get(`/repos/${repository.full_name}/issues`);

      this.setState({ loading: false });
      navigation.navigate('Issues', { Issues: { data }, title: 'Issues' });
    } catch (err) {
      this.setState({ loading: false });
      console.tron.log('algum erro');
    }
  };

  render() {
    const { repository } = this.props;
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>
            {repository.name}
          </Text>
          <Text style={styles.description}>{repository.owner.login}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.renderIssues}>
          {loading ? (
            <ActivityIndicator size="small" color="#666" />
          ) : (
            <Icon style={styles.icon} name="angle-right" size={20} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default RepositoryItem;
