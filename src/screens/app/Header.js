import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';



export default class Header extends Component {
    render() {
        return (
            < View style={styles.header}>
                <Text style={styles.text}>Find Your Jewrely</Text>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    header: {

        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E4053',


    },
    text: {
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        color: '#F4DFDF',
        marginTop: 40
    }

});