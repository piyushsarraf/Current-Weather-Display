import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WeatherInfo({currentWeather}) {
    const {
        main : {temp, temp_min, temp_max},
        weather: [details], 
        name,
    } = currentWeather

    const {icon, main, description} = details
    const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={style.weatherInfo}>
            <Text>{name}</Text>
            <Image style={style.weatherIcon} source = {{uri : iconURL}} />
            <Text style={style.textPrimary}>{temp}°</Text>
            <Text> </Text>
            <Text style={style.weatherDescription}>{description}</Text>
            <Text style={style.textSecondary}>{main}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },
    weatherDescription: {
        textTransform: 'capitalize'
    },
    weatherIcon : {
        width:100, height:100, 
    },
    textPrimary : {
        fontSize: 40, 
        color: PRIMARY_COLOR
    },
    textSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR, 
        fontWeight: '500',
        marginTop: 10
    }
})