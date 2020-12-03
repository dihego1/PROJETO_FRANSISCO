import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import Carro from './../../components/Carro'
import Linha from './../../components/Linha'

const listCar = [
    {
        id: '1',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '2',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '3',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '4',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '5',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '6',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '7',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '8',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '9',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '10',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '11',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '12',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
    {
        id: '13',
        title: 'Crown Victoria',
        description: 'Second generation (EN114; 1998-2012)'
    },
]

export default function Modelo() {
    

    return (
        <View style={styles.container}>
            <View style={{height: 30, width: '100%'}}></View>
            <FlatList nestedScrollEnabled
            bounces={false}
            data={listCar}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
                <TouchableOpacity >
                    <Carro title= {item.title} description={item.description} />
                </TouchableOpacity>
            }
            >
                
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    statusBar: {
        height: 20,
        backgroundColor: '#000'
    }
})