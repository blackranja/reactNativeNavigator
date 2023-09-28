import { View, Text, Image } from 'react-native'
import React from 'react'
import {SIZES,FONTS,COLORS,SHADOWS,assets} from '../constants';
import { useRouter } from 'expo-router';
import { RectButton } from './Button';
import { useNavigation } from 'expo-router';

export const NFTTitle = ({title,subTitle,titleSize,subTitlesize}) => {
    const navigation=useNavigation();
  //const route=useRouter();
  //console.log(data);
  return (
    <View style={{paddingTop:5}}>
      <Text style={{
        fontFamily:FONTS.regular,
        fontSize:titleSize,
        color:COLORS.primary,
      }}>
        {title}
      </Text>
      <Text style={{
        fontFamily:FONTS.light,
        fontSize:subTitlesize,
        color:COLORS.primary}}>
          by {subTitle}
        </Text>
      </View>
  )
}


      
    /*Export the below component...................}

      <View style={{
        marginTop:SIZES.font,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
      }}>
        <EthPrice price={data.price}/>
        {/*The Rectangluar Touch Button*/
    /*
        <RectButton 
          minWidth={120}
          fontSize={SIZES.font}
          //handlePress={()=>route.push("/details")}
          handlePress={()=>navigation.navigate("details",{data})}
          
          />
      </View>
     
    </View>
  )
}
*/
export const EthPrice = ({price}) => {
    return (
      <View style={{flexDirection:'row', alignItem:'center'}}>
       <Image
       source={assets.eth}
       resizeMode='contain'
       style={{width:20,height:20,marginRight:2}}
       />
       <Text style={{
        fontFamily:FONTS.medium,
        fontSize:SIZES.font,
        color:COLORS.primary,
        }}>
          {price}</Text>
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
        flexDirection:'row',
        position:'absolute',
        top:-50,
        left:1,

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
        position:'absolute',
        top:-55,
        right:1,
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:'50%',
      
      }}>
        <Text style={{
            fontFamily:FONTS.regular,
            fontSize:SIZES.small,
            color:COLORS.primary,
        }}>
            Ending in
        </Text>
        <Text style={{
            fontFamily:FONTS.semiBold,
            fontSize:SIZES.medium,
            color:COLORS.primary
        }}>
            12h 30m
        </Text>
        
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
        <People/>
        <EndDate/>
      </View>
    )
  }
    