import React, {Component} from 'react';
import {Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';
import api from '../../services/api';

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handlerAddUser = async () => {
    const {users, newUser} = this.state;

    const response = await api.get(`users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const {users, newUser} = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitakize="none"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handlerAddUser}
          />
          <SubmitButton onPress={this.handlerAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
