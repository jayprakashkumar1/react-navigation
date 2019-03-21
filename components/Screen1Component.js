import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
export default class Screen1 extends React.Component {
  static navigationOptions = {
    // header:null,  // to make header invisible
    title: 'Screen 1',
  }
  
  
  render() {
    const { navigation } = this.props;
    
    const itemId = navigation.getParam('itemId','NO-ID');
    const name = navigation.getParam('name','NO-NAME');

    return (
      <View style={styles.container}>
        <Text>Screen1 </Text>
        <Text>Passed parameters are :</Text>
        <Text>itemId: {JSON.stringify(itemId)} </Text>
        <Text>Name: {JSON.stringify(name)} </Text>

        <TouchableOpacity>                                   
        <Text onPress={()=> {this.props.navigation.navigate('Screen1a') }} style={styles.textButton}> Go To Screen 1a</Text>
        </TouchableOpacity>
        
        <TouchableOpacity> 
        <Text onPress={()=> this.props.navigation.navigate('Screen1b')} style={styles.textButton}> Go To Screen 1b</Text>
        </TouchableOpacity>
        
        <TouchableOpacity> 
        <Text onPress={()=> this.props.navigation.navigate('Screen1c')} style={styles.textButton}> Go To Screen 1c</Text>
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
    backgroundColor: 'blue',
  }
});
