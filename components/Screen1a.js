import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
export default class Screen1a extends React.Component {
  static navigationOptions = {
    // header:null,  // to make header invisible
    title: 'Screen 1A',
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text>Screen 1a </Text>
        <TouchableOpacity>                                   
        <Text onPress={()=> {this.props.navigation.navigate('Home') }} style={styles.textButton}> Go To Home Screen</Text>
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
