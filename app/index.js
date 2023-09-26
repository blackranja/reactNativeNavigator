import { View, SafeAreaView,Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Home from '../components/screens/Home'
const index = () => {
  return (
    <SafeAreaView>
        
    <View>
        <Home/>
    </View>
    </SafeAreaView>
  )
}

export default index