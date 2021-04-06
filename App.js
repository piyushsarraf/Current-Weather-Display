import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';
import React, {useEffect, useState,} from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo'
import UnitsPicker from './components/UnitsPicker'
import ReloadIcon from './components/ReloadIcon'
import WeatherDetails from './components/WeatherDetails'
import { colors } from './utils';



const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [unitSystem])
  
  async function load() {
    setCurrentWeather(null)
    try {
      let {status} = await Location.requestPermissionsAsync()
      
      if(status !=='granted') {
        alert(`Access to location is needed to run the app`)
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords
      const weatherURL = `${baseURL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${apiKey}`

      // console.log(weatherURL)

      const response = await fetch(weatherURL)
      const res = await response.json()

      if(response.ok) 
        setCurrentWeather(res)
      else
        setErrorMessage(res.message)
      // console.log(setCurrentWeather)
      // alert(`Latitude : ${latitude}, Longitude: ${longitude}`)

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  
  if(currentWeather) {
    
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
            <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}/>
            <ReloadIcon load={load}/>
            <WeatherInfo currentWeather={currentWeather} />
        </View>
        {/* <WeatherDetails currentWeather={currentWeather}/> */}
      </View>
    );
  } else if(errorMessage){
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        
        <StatusBar style="auto" />
        
      </View>
      
    );
  }
  else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        {/* buffering sign  */}
        <ActivityIndicator size='large' color="blue" />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center', 
    flex: 1
  }
});
