import { View, Text , StyleSheet, Dimensions} from 'react-native'
import React, {useState ,useEffect} from 'react'
import * as Location from "expo-location"
import MapView from "react-native-maps"

const TrackLocation = () => {
    const[location, setLocation] = useState(null);
    const[errorMsg, setErrorMsg] = useState(null);

    useEffect(()=>{
        (async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg("permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })
    },[])
    let text = "waiting..."
    if(errorMsg)
    {
        text(errorMsg)
    }
    else if(location)
    {
        text = JSON.stringify(location)
    }
  return (
    <View>
      <MapView
        showsMyLocationButton = {true}
        showsUserLocation = {true}
        style = {styles.map}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
export default TrackLocation