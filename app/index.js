import { View, SafeAreaView,Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Products from '../components/screens/Products';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer} from '@react-navigation/native';
import Details from '../components/screens/Details';
import { ScrollView } from 'react-native-gesture-handler';
import Welcome from '../components/Welcome';
//const Stack=createNativeStackNavigator();

const Home = () => {
    const router=useRouter();
  return (
    <SafeAreaView style={{flex:1,backGroundColor:'#ffccff'}}>
        <Stack.Screen options={{headerTitle:"TestOne"}}/>
        <ScrollView>
            <View>
                <Welcome/>
                <Products/>
                <Details/>
            </View>
        </ScrollView>
    </SafeAreaView>
   
   
  )
}

export default Home