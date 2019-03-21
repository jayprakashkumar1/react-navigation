import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Screen1cComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1c </Text>
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
