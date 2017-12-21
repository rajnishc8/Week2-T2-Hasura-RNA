import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Header,  
  Title,  
  Content,
  Text,
  Button,
  View
} from 'react-native';
//import Expo from 'expo';
//import { DrawerNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';

//import HomeScreen from './src/HomeScreen';
//import ProfileScreen from './src/ProfileScreen';

export default class HelpCentreScreen extends React.Component {
  static navigationOptions = {
    title: 'HelpCentre',    
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack }   = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text > HelpCentre </Text>
        <Text onPress={ () => navigate('Home')} >
          Navigate to Home
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
