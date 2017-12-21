/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * use 1.) react-native init Week1_Task1_RNA_V1
 *     2.) cd Week1_Task1_RNA_V1
 *        2a.) npm install --save react-navigation
 *        2b.) npm install --save react-native-vector-icons  <- run this from admin command prompt. 
 *        2c.) react-native link        <- do this after installing all npm packages.         
 *     3.) react-native run-android
 * To create and run it on android device
 * * Demo's how to "Stack navigate" between screen's using 'react-navigation'
 *   Note : this -> navigation.state.params.name can only done in StackNavigator!
 * * @flow
 *  Note:
 * create a new project and add react-navigation:
* # Create a new React Native App
* react-native init SimpleApp
* cd SimpleApp
* 
* # Install the latest version of react-navigation from npm
* npm install --save react-navigation
* 
* # Run the new app
* react-native run-android
* # or:
* react-native run-ios
* 
* If you are using create-react-native-app instead of react-native init, then:
* # Create a new React Native App
* create-react-native-app SimpleApp
* cd SimpleApp

* # Install the latest version of react-navigation from npm
* npm install --save react-navigation
* 
* # Run the new app
* npm start
* 
* # This will start a development server for you and print a QR code in your terminal.
* Verify that you can successfully see the bare sample app run on iOS and/or Android:
 */

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
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import ListScreen    from './src/ListScreen';
import MomentsScreen from './src/MomentsScreen';
import HighlightsScreen from './src/HighlightsScreen';
import SettingsScreen from './src/SettingsScreen';
import HelpCentreScreen from './src/HelpCentreScreen';

const NavigationApp = DrawerNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'रुद्र:',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: { screen: ProfileScreen,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    List: { screen: ListScreen,
      navigationOptions: {
        drawerLabel: 'List',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-list' : 'ios-list-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Moments: { screen: MomentsScreen,
      navigationOptions: {
        drawerLabel: 'Moments',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-moon' : 'ios-moon-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Highlights: { screen: HighlightsScreen,
      navigationOptions: {
        drawerLabel: 'Highlights',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-flash' : 'ios-flash-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Settings: { screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: 'Settings and privacy',        
      },
    },
    HelpCentre: { screen: HelpCentreScreen,
      navigationOptions: {
        drawerLabel: 'Help Centre',        
      },
    },
  },
  {
    navigationOptions: {
       headerStyle:{
        //marginTop: Expo.Constants.statusBarHeight
        marginTop: 10
      }
    }
  }
);


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component<{}> {
  render() {
    return <NavigationApp/>;
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
