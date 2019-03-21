import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
export default class HomeComponent extends React.Component {
  
//To make header customizable
  static navigationOptions = {
    // header:null,  // to make header invisible
    title: 'Home',   // To make header title as Home
    
    // style on header
    headerStyle: {
      backgroundColor:'green',
      opacity:0.8,
      // other style
    },
    // for back button and titlecolor
    headerTintColor:'white',

    // to customize the header title
    headerTitleStyle: {
      fontWeight:'bold',
      fontSize:20,
      // other style
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen.</Text>

        <TouchableOpacity>                                   
        <Text onPress={()=> {this.props.navigation.navigate('Screen1',{itemId:11,name:'jp'}) }} style={styles.textButton}> Go To Screen1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity> 
        <Text onPress={()=> this.props.navigation.navigate('Screen2')} style={styles.textButton}> Go To Screen2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity> 
        <Text onPress={()=> this.props.navigation.navigate('Screen3')} style={styles.textButton}> Go To Screen3</Text>
        </TouchableOpacity>        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    padding:10,
    fontSize:20,
    marginTop:20,
    marginLeft:'auto',
    marginRight:'auto',
    fontWeight:'bold',
    borderRadius:30,
    color:'white',
    textAlign:'center',
    backgroundColor: 'green',
  },
});
