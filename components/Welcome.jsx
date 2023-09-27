import { View, Text, SafeAreaView, FlatList} from 'react-native'
import React,{useState} from 'react'
import {COLORS,NFTData} from '../constants';
import FocusedStatusBar from './FocusedStatusBar';
import HomeHeader from './HomeHeader';
import { CircleButton,RectButton } from './Button';
import NFTCard from './cards/NFTCard';


const Welcome = () => {
  return (
    <>
      <FocusedStatusBar background={COLORS.primary} />
      <View  style={{flex:1}}>
        <View style={{zIndex:100}}>
          <FlatList
          data={NFTData}
          renderItem={({item})=><NFTCard data={item}/>}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader/>}  
          />
        </View>
        
      </View>
   </>
  )
}

export default Welcome