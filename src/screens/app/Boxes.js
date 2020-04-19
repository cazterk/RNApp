import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';




export default class Boxes extends Component {
    render() {
        return (
            < View style={styles.container}>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image source={require('../../img/img1.jpg')} style={styles.img} />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image source={require('../../img/img2.jpg')} style={styles.img} />
                    </View>

                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image source={require('../../img/img3.jpg')} style={styles.img} />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image source={require('../../img/img4.jpg')} style={styles.img} />
                    </View>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5,
        backgroundColor: '#85929E'

    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#85929E'
    },
    img: {
        width: '100%',
        height: '100%'
    }
});