import {TouchableOpacity, Image, View, Text } from 'react-native'
import React,{useState} from 'react'
import {COLORS,SIZES,FONTS,SHADOWS} from '../constants';
import { useNavigation } from 'expo-router';
export const CircleButton = ({imgUrl,handlePress,...props}) => {
    const [toggle,setToggle]=useState(false);
    const navigation=useNavigation()
  return (
    !toggle ? 

    <TouchableOpacity style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        position:'absolute',
        borderRadius:SIZES.extraLarge,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        ...props,
        }}
        onPress={()=>{
            setToggle(!toggle);
        }}
        >
           
            <Image source={imgUrl}
            resizeMode='contain'
            style={{width:24,height:24}}
            />
            
        </TouchableOpacity>
        :
        <TouchableOpacity style={{
            width:40,
            height:40,
            backgroundColor:"#ffcc00",
            position:'absolute',
            borderRadius:SIZES.extraLarge,
            alignItems:'center',
            justifyContent:'center',
            ...SHADOWS.light,
            ...props,
            }}
            onPress={()=>{
                setToggle(!toggle);
            }}
            >
               
                <Image source={imgUrl}
                resizeMode='contain'
                style={{width:24,height:24}}
                />
                
            </TouchableOpacity>
  )
}

export const RectButton=({minWidth,fontSize,handlePress,data,props})=>{
    return(
        <TouchableOpacity style={{
            position:'absolute',
            right:1,
            bottom:3,
             backgroundColor:COLORS.primary,
            borderRadius:SIZES.extraLarge,
            minWidth:minWidth,
            padding:SIZES.small,
            ...props,
            }}
            onPress={()=>{
                navigation.navigate('/details',{data})
            }}
            >
               
                <Text style={{
                    fontFamily:FONTS.semiBold,
                    fontSize:fontSize,
                    coor:COLORS.white,
                    textAlign:'center'
                }}>
                    Place a bid
                </Text>
                
            </TouchableOpacity>
    )
}
