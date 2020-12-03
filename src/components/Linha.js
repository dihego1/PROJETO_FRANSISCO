import React from 'react'
import { View } from 'react-native'

export default function Linha(props) {
    styles = function (widthLinha, borderWidthLinha, colorLinha) {
        return {
            width: parseInt(widthLinha),
            borderWidth: parseInt(borderWidthLinha),
            color: colorLinha ? colorLinha : '#000'
        }
    }

    return (
        <View style={styles(props.width, props.borderWidth)}/>
    )
}