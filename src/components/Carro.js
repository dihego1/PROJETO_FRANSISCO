import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Carro(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('./../assets/image/carro.jpg')}/>
            <View style={styles.viewTxt}>
                <Text style={styles.txtTitle}> {props.title}</Text>
                <Text style={styles.txtDescription}>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        flexDirection: 'row',
        width: '100%',
        height: 95,
    },
    txtTitle: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: 2
    },
    txtDescription: {
        fontSize: 16,
        color: '#000',
        position: 'absolute',
        marginTop: 23,
        left: 5
    },
    img: {
        height: 55,
        width: 110,
        borderRadius: 10
    },
    viewTxt: {
        flexDirection: 'column',
        left: 20
    }
})