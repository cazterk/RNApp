/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Header from './Header';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import Boxes from './Boxes';

export default class Profile extends Component {
  render() {
    return (
      < View style={styles.container}>
        <View style={styles.mainbody}>

          <Image style={styles.imgprofile} source={require("../../img/profile1.png")} />
        </View>
        <Text style={styles.name}>
          Cephas
        </Text>
        <Text style={styles.userName}>
          @Caz
        </Text>

        <View style={styles.item}>
          <Image source={require("../../img/Emerald.png")} />
          <Text style={styles.labelItem}>Jewerly rush</Text>
          <Text style={styles.sublabelItem}>Available
          </Text>
        </View>

        <View style={styles.item}>
          <Image source={require("../../img/reward.png")} />
          <Text style={styles.labelItem}>Achievements</Text>
          <Text style={styles.sublabelItem1}>200 purchases</Text>
        </View>

        <View style={styles.item}>
          <Image source={require("../../img/online.png")} />
          <Text style={styles.labelItem}>Active Status</Text>
          <Text style={styles.sublabelItem}>Online</Text>
        </View>




      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 677,
    backgroundColor: '#2E4053'

  },
  imgprofile: {
    marginLeft: 160,
    marginTop: 100,
    height: 120,
    width: 120,

  },
  name: {
    color: "white",
    fontSize: 22,
    marginLeft: 160,
    marginTop: 12
  },
  userName: {
    color: "#85929E",
    fontSize: 16,
    marginLeft: 160,
    marginTop: 4

  },
  item: {
    marginTop: 30,

    marginLeft: 80,
    flexDirection: 'row',


  },
  labelItem: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: 'bold'
  },
  sublabelItem: {
    marginTop: 20,
    fontSize: 18,
    color: "#179D6C",
    marginLeft: -84,
    fontWeight: 'bold'
  },
  sublabelItem1: {
    marginTop: 20,
    fontSize: 18,
    color: "#179D6C",
    marginLeft: -91,
    fontWeight: 'bold'
  }
});