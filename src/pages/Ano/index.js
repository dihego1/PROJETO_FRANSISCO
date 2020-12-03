import React, { Fragment } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import Marca from './../../components/Marca'


const listAno = [
    {
        id: '0',
        nome: 'Toyota',
    },
    {
        id: '1',
        nome: 'Toyota',
    },
    {
        id: '2',
        nome: 'Ford',
    },
    {
        id: '3',
        nome: 'Hyundai'
    },
    {
        id: '4',
        nome: 'Chevrolet'
    },
    {
        id: '5',
        nome: 'Kia'
    }
    ,
    {
        id: '6',
        nome: 'Kia'
    },
    {
        id: '7',
        nome: 'Kia'
    },
    {
        id: '8',
        nome: 'Kia'
    },
    {
        id: '9',
        nome: 'Kia'
    }
    ,
    {
        id: '10',
        nome: 'Kia'
    },
    {
        id: '11',
        nome: 'Kia'
    },
    {
        id: '12',
        nome: 'Kia'
    },
    {
        id: '13',
        nome: 'Kia'
    }
    ,
    {
        id: '14',
        nome: 'Kia'
    },
    {
        id: '15',
        nome: 'Kia'
    },
    {
        id: '16',
        nome: 'Kia'
    }
]


export default function Ano() {
   return (
    <View>
        <Text>TESTE</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 16,
        top: 36,
        backgroundColor: '#FFF'
    }
})
