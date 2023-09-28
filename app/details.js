import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import React from 'react'
import {useFonts} from 'expo-font';
import { DefaultTheme } from '@react-navigation/native';

//const Stack=createNativeStackNavigator();
const theme={...DefaultTheme,colors:{
    ...DefaultTheme.colors,
    backgroundColor:"transparent"
}}

const Details = ({data}) => {
  const [loaded]=useFonts({
    InterBold:require('../assets/fonts/Inter-Bold.ttf'),
    InterSemiBold:require('../assets/fonts/Inter-SemiBold.ttf'),
    InterMedium:require('../assets/fonts/Inter-Medium.ttf'),
    InterRegular:require('../assets/fonts/Inter-Bold.ttf'),
})
const router=useRouter();
  console.log(data);
  return (
    <SafeAreaView theme={theme} style={
      {flex:1,backGroundColor:'#ffcccc'}
      }>
      <Stack.Screen options={{
          headerShown:false,
      }}
      />
     
      <ScrollView>
         <View>
          <Text>
            {data}
          </Text>
         </View>
              
              
         
      </ScrollView>
  </SafeAreaView>
 
  )
}

export default Details