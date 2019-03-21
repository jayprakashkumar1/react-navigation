import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeComponent from './components/HomeComponent';
import Screen1Component from './components/Screen1Component';
import Screen2Component from './components/Screen2Component';
import Screen3Component from './components/Screen3Component';

import Screen1a from './components/Screen1a';
import Screen1b from './components/Screen1b';
import Screen1cComponent from './components/Screen1cComponent';

const RootStack = createStackNavigator(
  {
    Home:HomeComponent,

    Screen1:Screen1Component,
    Screen2:Screen2Component,
    Screen3:Screen3Component,

    Screen1a:Screen1a,
    Screen1b:Screen1b,
    Screen1c:Screen1cComponent,  
   },
  {
    initialRouteName: 'Home',
    // default navigations options
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:'green',
        opacity:0.6,
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
}
)
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
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
  title:{
    textAlign:'center',
    marginTop:30,
    fontSize:30,
    fontWeight:'bold',
},
  center: {
    marginLeft:'auto',
    marginRight:'auto',
  },  
});
