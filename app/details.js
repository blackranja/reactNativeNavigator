import { View, Text,SafeAreaView,Image,StatusBar,Flatlist } from 'react-native';
import {COLORS,SIZES,SHADOWS,FONTS,assets} from '../constants';
import {CircleButton,RectButton,Subinfo,FocusedStatusBar,DetailsDesc,DetailsBid} from '../components';
import { useGlobalSearchParams,useLocalSearchParams } from 'expo-router';

const Details = () => {
  const local=useLocalSearchParams();
  //const {data}=local.data;
 
    console.log(local.data)
 

  return (
    <View>
      <Text>details</Text>
    </View>
  )
}

export default Details