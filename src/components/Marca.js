import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Marca(props) {
    return (
        <View style={styles.container}>
            <View style={styles.viewMarca}>
                <Image style={styles.image} source={require('./../assets/image/toyota.png')}/>
                <Text style={styles.txt}>{props.nomeMarca}</Text>
            </View>
            <View style={styles.linha}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        width: '100%',
        top: 40,
        justifyContent: 'center'
    },
    viewMarca: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    image: {
        height: 55,
        width: 55,
        left: 16
    },
    txt: {
        fontSize: 20,
        color: '#8c8c8c',
        left: 25,
        fontWeight: 'bold',
    },
    linha: {
        width: '98%',
        borderWidth: 1,
        color: '#8C8C8C',
        top: 30

    }

})