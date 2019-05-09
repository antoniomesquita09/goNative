import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import Header from '../../Components/Header';
import styles from './styles';
import RepositoryItem from './RepositoryItem';

class Repositories extends Component {
  state = {
    repositoryInput: '',
    loading: false,
    repositories: [],
    error: '',
  };

  async componentDidMount() {
    const repositories = JSON.parse(await AsyncStorage.getItem('@Github:repository'));

    this.setState({ repositories: repositories || [] });
  }

  addRepositories = async () => {
    const { repositoryInput, repositories } = this.state;
    this.setState({ loading: true });

    if (!repositoryInput) {
      this.setState({
        error: 'Insira um repositorio',
        loading: false,
      });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      if (repositories.find(repository => repository.full_name === data.full_name)) {
        this.setState({
          error: 'O repositorio ja existe',
          loading: false,
          repositoryInput: '',
        });
        return;
      }

      await this.setState({ repositories: [...repositories, data] });

      await AsyncStorage.setItem('@Github:repository', JSON.stringify([...repositories, data]));
    } catch (err) {
      this.setState({ error: 'Repositorio não encontrado' });
    }

    this.setState({ repositoryInput: '', loading: false });
  };

  renderListItem = ({ item }) => {
    const { navigation } = this.props;
    return <RepositoryItem repository={item} navigation={navigation} />;
  };

  render() {
    const {
      repositoryInput, loading, repositories, error,
    } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositorios" />
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositorio"
            underlineColorAndroid="transparent"
            value={repositoryInput}
            onChangeText={text => this.setState({ repositoryInput: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepositories}>
            {loading ? (
              <ActivityIndicator size="small" color="#666" />
            ) : (
              <Icon name="plus" style={styles.icon} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.error}>
          <Text style={styles.textError}>{error}</Text>
        </View>
        <FlatList
          data={repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

export default Repositories;
