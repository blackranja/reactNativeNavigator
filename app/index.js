import { View, SafeAreaView,ScrollView,Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
//import Products from './products';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer} from '@react-navigation/native';
//import Details from './details';
//import { ScrollView } from 'react-native-gesture-handler';
import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useFonts} from 'expo-font';
import { DefaultTheme } from '@react-navigation/native';
//const Stack=createNativeStackNavigator();
const theme={...DefaultTheme,colors:{
    ...DefaultTheme.colors,
    backgroundColor:"transparent"
}}
const Home = () => {
    const [loaded]=useFonts({
        InterBold:require('../assets/fonts/Inter-Bold.ttf'),
        InterSemiBold:require('../assets/fonts/Inter-SemiBold.ttf'),
        InterMedium:require('../assets/fonts/Inter-Medium.ttf'),
        InterRegular:require('../assets/fonts/Inter-Bold.ttf'),
    })
    const router=useRouter();
  return (
    <SafeAreaView theme={theme} style={
        {flex:1,backGroundColor:'#ffcccc'}
        }>
        <Stack.Screen options={{
            headerShown:false,
        }}
        />
       
        <ScrollView>
           
                
                <Welcome/>
                
                
           
        </ScrollView>
    </SafeAreaView>
   
   
  )
}

export default Home