import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon({load}) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress = {load} name="reload" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon : {
        position: 'absolute',
        top: 50, 
        right: -90
    }
})