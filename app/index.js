import { View, SafeAreaView,Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
//import Products from './products';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer} from '@react-navigation/native';
//import Details from './details';
import { ScrollView } from 'react-native-gesture-handler';
import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//const Stack=createNativeStackNavigator();

const Home = () => {
    const router=useRouter();
  return (
    <SafeAreaView style={
        {flex:1,backGroundColor:'#ffcccc'}
        }>
        <Stack.Screen options={{
            headerStyle:{backgroundColor:'white'},
            headerShadowVisible:false,
            headerTitle:''
        }}
        />
       
        <ScrollView>
            <View>
                <Navbar/>
                <Welcome/>
                <Footer/>
                
            </View>
        </ScrollView>
    </SafeAreaView>
   
   
  )
}

export default Home