import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default class Logo extends Component<{}>{
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 260, height: 270 }}
                    source={require('../img/logo.png')} />

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    Logotext: {
        marginVertical: 15,
        fontSize: 18,
        color: '#E0F2F1',


    }
});