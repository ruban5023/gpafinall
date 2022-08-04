import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './SCREENS/Home';
import know from './SCREENS/know';
import cgpa from './SCREENS/cgpa';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="CGPA CALCULATOR" component={Home} />
        <Stack.Screen name="Calculation" component={know} />
        <Stack.Screen name="Cgpa" component={cgpa}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})