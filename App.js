import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'mobx-react'
import AppNavigator from './app/app.navigator'
import stores from './app/stores'

export default class App extends React.Component {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator/>
      </Provider>
      
      // <View style={styles.container}>
      //   <Text>to Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
