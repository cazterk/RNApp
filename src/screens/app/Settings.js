/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';

import {
  Container,
  Button,
  Text,
  TextInput,
  Centered,
} from '../../shared/styledComponents';
import { routes, colors, buttons, placeholders } from '../../shared/constants';

const Settings = ({ navigation }) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate(routes.loader);
  };
  return (
    <Container style={styles.container}>
      <Centered style={styles.container}>
        <TextInput placeholder={placeholders.oldPassword} password />
        <TextInput placeholder={placeholders.newPassword} password />
        <Button>
          <Text color={colors.bright}>{buttons.confirm}</Text>
        </Button>
      </Centered>
      <Centered style={styles.sb}>
        <Button onPress={signOutAsync}>
          <Text color={colors.bright}>{buttons.logout}</Text>
        </Button>
      </Centered>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D6D7E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sb: {
    backgroundColor: '#5D6D7E',
  }
})

export default Settings;
