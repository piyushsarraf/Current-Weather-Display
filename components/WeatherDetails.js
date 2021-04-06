import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'


export default function WeatherDetails({ currentWeather }) {
    const {
        main: {feels_like, humidity}, 
    } = currentWeather
    return (
        <View style={styles.weatherDetails}>
            <View style= {styles.weatherDetailsRow}> 
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: 'black'}}>
                    <Text>{feels_like} </Text>
                </View> 

                <View style={styles.weatherDetailsBox}>
                    <Text>{humidity} </Text>
                </View> 
               
            </View> 
            
        </View>
    )
}

const styles = StyleSheet.create({ 
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1, 
        borderColor: 'blue', 
        borderRadius: 10
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20
    }
})