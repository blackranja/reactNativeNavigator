import { View, Text, Image } from 'react-native'
import React from 'react'
import {SIZES,FONTS,COORS,SHADOWS,assets} from '../constants';

export const NFTTitle = () => {
  return (
    <View>
      <Text>ntf-title</Text>
    </View>
  )
}

export const EthPrice = () => {
    return (
      <View>
        <Text>SubInfo</Text>
      </View>
    )
  }
  export const ImageCap = ({imgUrl,index}) => {
    return (
     <Image 
     source={imgUrl}
     resizeMode="contain"
     style={{
        width:48,
        height:48,
        marginLeft:index === 0 ? 0 : -SIZES.font 
     }}/>
    )
  }
  export const People = () => {
    return (
      <View style={{
        flexDirection:'row'
      }}>
        {[assets.person02,assets.person03,assets.person04].map((imgUrl,index)=>(
            <ImageCap imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:'50%'
      }}>
        <Text style={{
            fontFamily:FONTS.regular,
            fontSize:SIZES.small,
            color:COLORS.primary,
        }}
        
      </View>
    )
  }
  export const SubInfo = () => {
    return (
      <View style={{
        width:'100%',
        paddingHorizontal:SIZES.font,
        marginTop:SIZES.extraLarge,
        flexDirection:"row",
        justifyContent:'space-between'
      }}>
        <Text>SubInfo</Text>
      </View>
    )
  }
    