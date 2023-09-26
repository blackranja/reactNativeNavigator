import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import {COLORS,SIZES,SHADOWS,assets} from '../constants';

const NFTCard = ({data}) => {
    const navigation=useNavigation();

  return (
    <View style={{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extralarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}>
        <Text>NFT CARD</Text>
    </View>
    
  )
}

export default NFTCard