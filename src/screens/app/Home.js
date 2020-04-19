/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Header from './Header';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Boxes from './Boxes';

export default class Home extends Component {
  render() {
    return (
      < View style={styles.container}>

        <Header />
        <Boxes />
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053'

  }
});
