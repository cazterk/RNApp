/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import Logo from '../../components/logo'

import {
  Container,
  Centered,
  TextInput,
  Button,
  Text,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../shared';

const SignIn = ({ navigation: { navigate } }) => {
  // TODO: move this to utils
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigate(routes.app);
  };

  return (
    <Container style={styles.container}>
      <Logo />
      <Centered style={styles.container}>
        <TextInput placeholder={placeholders.username} />
        <TextInput placeholder={placeholders.password} password />
        <Text color={colors.dark} onPress={() => navigate(routes.forget)}>
          {messages.forget}
        </Text>
      </Centered>
      <Centered style={styles.container}>
        <Text onPress={() => navigate(routes.register)}>
          {messages.register}
        </Text>
        <Button onPress={signInAsync}>
          <Text color={colors.bright}>{buttons.login}</Text>
        </Button>
      </Centered>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SignIn;
