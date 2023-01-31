import {View, Text, TextInput,  TouchableOpacity,  FlatList,SafeAreaView,StyleSheet } from 'react-native';
import Background from './Background';
import { useNavigation } from '@react-navigation/native';
import { darkGreen } from './Constants';
import React , {useState, useEffect}from 'react'
import Autocomplete from "react-native-autocomplete-input";
import {firebase} from '../../config'


const Login = () => {

  const navigation = useNavigation(); 

  const _searchText = (text) =>
    {
      let matches = [];
      if(text)
      {
        matches = users.filter(res =>{
          const regex = new RegExp(`${text.trim()}`,'i');
          return res.from.match(regex)
        })
        //alert(JSON.stringify(matches))
       setIsSuggestion(matches)
      }
      else{
        setIsSuggestion([])
      }
      //alert(JSON.stringify(users));
    }

    const _searchTo = (text) =>
    {
      let matches = [];
      if(text)
      {
        matches = users.filter(res =>{
          const regex = new RegExp(`${text.trim()}`,'i');
          return res.to.match(regex)
        })
        //alert(JSON.stringify(matches))
       settoSuggestion(matches)
      }
      else{
        settoSuggestion([])
      }
      //alert(JSON.stringify(users));
    }

    const [users, setUsers] = useState([]);
    const [isSuggestion, setIsSuggestion] = useState([])
    const [toSuggestion, settoSuggestion] = useState([])
    const todoRef = firebase.firestore().collection('bus_details')

   useEffect(async()=>{
        todoRef
          .onSnapshot(
            querySnapshot => {
              const users = []
              querySnapshot.forEach((doc)=>{
                const {from,to,via,busAvailable,arrivalTime} = doc.data()
                users.push({
                  id: doc.id,
                  from,
                  via,
                  to,
                  busAvailable,
                  arrivalTime,
                })
              })
              setUsers(users)
            }
          )

          
            
   },[])


  return (
    <Background>
      
      <View style={{alignItems:'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 15,
            textAlign:'center',
            marginLeft:10
          }}>
          Start your ride!
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            opacity:0.99,
            height: 550,
            width: 310,
            marginLeft:25,
            marginRight:20,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 10,
              marginRight:200,
            }}>
            From 
          </Text>
          {/* <TextInput
      placeholder="Your location"
      style={{></TextInput> */}
      
    <SafeAreaView style = {styles.container}>
        <View style = {styles.searchContainer}>
            <Autocomplete
                autoCapitalize='none'
                autoCorrect = {false}
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                listStyle = {styles.listStyle}
                placeholder = 'enter place'
                onChangeText={(text)=>_searchText(text)}
                data = {isSuggestion}
                flatListProps = {{
                  renderItem: ({item})=>

                  <View>
                    <Text>{item.from}</Text>
                  </View>
                }}
                // renderItem = {(text)=>{text.from}}
            />
        </View>
    </SafeAreaView>
            
           <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              marginRight:230
            }}>
            To
          </Text>
          <SafeAreaView style = {styles.container}>
        <View style = {styles.searchContainer}>
            <Autocomplete
                autoCapitalize='none'
                autoCorrect = {false}
                containerStyle = {styles.containerStyle}
                inputContainerStyle = {styles.inputContainerStyle}
                listStyle = {styles.listStyle}
                placeholder = 'enter place'
                onChangeText={(text)=>_searchTo(text)}
                data = {toSuggestion}
                flatListProps = {{
                  renderItem: ({item})=>

                  <View>
                    <Text>{item.to}</Text>
                  </View>
                }}
                // renderItem = {(text)=>{text.from}}
            />
        </View>
    </SafeAreaView>
      
      <TouchableOpacity
  onPress={() => navigation.navigate('TrackLocation')}
      style={{
        backgroundColor:'#0f5323',
        borderRadius: 100,
        alignItems: 'center',
        width: 150,
        marginBottom:20,
        margin: 30,
        paddingVertical:5
        
      }}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Search Bus
      </Text>
    </TouchableOpacity>          

        </View>
      </View>
    </Background>
  );
};





export default Login;

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  searchContainer: {
  top:20
  },
  containerStyle: {
    // position: 'absolute',
    // right: 20,
    // width : '90%',

  },
  inputContainerStyle: {
    borderRadius: 100, 
    color: {darkGreen},
    paddingHorizontal: 10,
    paddingVertical: 5, 
    width:200, 
    backgroundColor: 'rgb(220,220, 220)',
    backgroundColor: '#ffff',
    borderWidth:2,
  },
  listStyle: {
    
  },
  
  })