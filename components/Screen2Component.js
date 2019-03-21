import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Screen2 extends React.Component {
  static navigationOptions = {
    // header:null,  // to make header invisible
    title: 'Screen 2',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen2 </Text>
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
});
