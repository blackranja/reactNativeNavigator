import { View, Text,SafeAreaView,Image,StatusBar,FlatList } from 'react-native';
import {COLORS,SIZES,SHADOWS,FONTS,assets} from '../constants';
import {CircleButton,RectButton,SubInfo,FocusedStatusBar} from '../components';
import DetailsDesc from '../components/DetailsDesc';
import DetailsBid from '../components/DetailsBid';
import { useRouter, useGlobalSearchParams,useLocalSearchParams } from 'expo-router';
import React from 'react';
import { EndDate, People } from '../components/SubInfo';
import {Stack} from 'expo-router';

const DetailsHeader=({data,navigation})=>(
 
  <View style={{width:'100%',height:373}}>
    <Image
    source={data.image}
    resizeMode="conver"
    style={{width:'100%',height:'100%'}}
    />
    <CircleButton
    imgUrl={assets.left}
    handlePress={()=>navigation.goBack()}
    left={15}
    top={StatusBar.currentHeight + 10}
    />
    <CircleButton
    imgUrl={assets.heart}
    right={15}
    top={StatusBar.currentHeight + 10}
    />
  </View>
)


const Details = () => {
  const local=useLocalSearchParams();
  //const {data}=local.data;
 
    //console.log(local.data)
 

  return (
    <SafeAreaView style={{flex:1}}>
       <Stack.Screen options={{
    headerShown:false
  }}
  /> 
      <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
      />
      <View style={{
        width:'100',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent:'center',
        backgroundColor:'rbga(255,255,255,0.5)',
        zIndex:1,
      }}>
        <RectButton 
        minWidth={170} 
        fontSize={SIZES.large} 
        {...SHADOWS.dark}
        />
      </View>
      <FlatList
      data={local.data.bids}
      renderItem={
        ({item})=><DetailsBid bids={item}/>
      }
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extralarge*3}}
      ListHeaderComponent={()=>(
        
        <>
        <DetailsHeader data={local.data} navigation={navigation}/>
       <SubInfo/>
       <View style={{padding:SIZES.font}}>
        <DetailsDesc data={local.data}/>
        {local.data.bids.length > 0 && (
          <Text style={{
            fontSize:SIZES.font,
            fontFamily:FONTS.semiBold,
            color:COLORS.primary
          }}>
            Current Bid

          </Text>
        )}

       </View>
       </>

      )}
      />

    </SafeAreaView>
  )
}

export default Details