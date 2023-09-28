import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import {COLORS,SIZES,SHADOWS,assets} from '../../constants';
import { CircleButton, RectButton} from '../Button';
import { SubInfo,EthPrice,ImageCap,People,EndDate, NFTTitle, } from '../SubInfo';

const NFTCard = ({data}) => {
    const navigation=useNavigation();
    console.log(data.title,data.subTitle,data.titleSize,data.subTitleSize)
    const handlePress=()=>{
        return(
        navigation.navigate("/details",{...data})
        )
    }
  return (
    <View style={{
        backgroundColor:COLORS.white,
        
        borderRadius:SIZES.font,
        marginBottom:SIZES.extralarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{width:'100%', height:250}}>
            <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width:"100%",
                height:"100%",
                borderTopLeftRadius:SIZES.font,
                borderTopRightRadius:SIZES.font,
            }}/>
            <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        </View>
            
            <SubInfo/>
            <View style={{
                width:'100%',
                padding:SIZES.font,}}>
                   <NFTTitle
                   title={data.name}
                   subTitle={data.creator}
                   titleSize={SIZES.medium}
                   subTitleSize={SIZES.base}
                   />
                   <View style={{
                    marginTop:SIZES.font,
                    flexDirection:'row',
                    justifyContent:"space-btween",
                    alignItems:'center',
                   }}>
                    <EthPrice price={data.price}/>
                    <RectButton 
                        
                        minWidth={120}
                        fontSize={SIZES.font}
          //handlePress={()=>route.push("/details")}
                        handlePress={handlePress}
                        data={data}
                        props={data}
          
          />
                   </View>
                </View>
           
    </View>
    
  )
}

export default NFTCard