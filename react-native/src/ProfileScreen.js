
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
//import Expo from 'expo';
//import { DrawerNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',    
    //headerTitle: 'Profile2',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack }   = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text > Profile </Text>
        <Text onPress={ () => navigate('Home')} >
          Navigate to Home
        </Text>
        <Text onPress={ () => navigate('DrawerToggle')} >
          Open Drawer
        </Text>
        <Button
           title="Go back"
           onPress={() => goBack()}
        />      
      </View>
    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
