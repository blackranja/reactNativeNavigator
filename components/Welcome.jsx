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
      <FocusedStatusBar backgroundColor={COLORS.primary} />
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
        <View
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
   </>
  )
}

export default Welcome