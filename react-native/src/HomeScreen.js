import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View
} from 'react-native';
//import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';


class HomeScreenTab extends React.Component {
  static navigationOptions = {
    title: 'HomeTab',
    //tabBarLabel: 'Home1',
    //headerTitle: 'Home2', 
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text > Home </Text>
        <Text style={styles.text} onPress={ () => navigate('Search')} >
          Navigate to Search
        </Text>
        <Button
            style={styles.btn1}
            title="Go to Search Tab"
            onPress={() => navigate('Search')}
        />        
      </View>
    ); 
  }
}

class SearchScreenTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        searchStr: '',        
    }
  } 
  
  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState =  async () => {
  
  }
  static navigationOptions = {
    title: 'SearchTab',
    //tabBarLabel: 'Search1',
    headerTitle: 'SearchTab',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack }   = this.props.navigation;
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
      <View style={styles.Container}>            
        <Text style={styles.header}> </Text>         
        <TextInput 
           style={styles.textInput}  
           placeholder="Search Twitter"
           placeholderTextColor='rgba(255,255,255,0.7)'
           onChangeText={ (searchStr) => this.setState({searchStr}) }
           underlineColorAndroid = 'transparent'
           returnKeyType="next"
           onSubmitEditing={() => this.passwordInput.focus()}  
           keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}                 
        />
        
        <TouchableOpacity style={styles.btn} onPress = {this.search} >
           <Text>SEARCH</Text>
        </TouchableOpacity>   
      </View>          
    </KeyboardAvoidingView>
    ); 
  }
  search = () => {
    //alert('test')
    alert(this.state.searchStr)
    this.props.navigation.navigate('Mail');
  }
}

class NotifyScreenTab extends React.Component {
  static navigationOptions = {
    title: 'NotifyTab',
    headerTitle: 'NotifyTab',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack }   = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text onPress={ () => navigate('Home')} >
          Navigate to Home
        </Text>
        <Button
            title="Go back to home tab"
            onPress={() => goBack()}
        />
      
      </View>
    ); 
  }
}

class MailScreenTab extends React.Component {
  static navigationOptions = {
    title: 'MailTab',
    headerTitle: 'MailTab',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack }   = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text onPress={ () => navigate('Home')} >
          Navigate to Home
        </Text>
        <Button
            title="Go back to home tab"
            onPress={() => goBack()}
        />
      
      </View>
    ); 
  }
}

const HomeScreenPage = TabNavigator(
  {
    Home: { 
      screen: HomeScreenTab,
      navigationOptions: {
        drawerLabel: 'HomeScreenTab',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Search: { screen: SearchScreenTab,
      navigationOptions: {
        drawerLabel: 'SearchTab',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Notify: { screen: NotifyScreenTab,
      navigationOptions: {
        drawerLabel: 'NotifyTab',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Mail: { screen: MailScreenTab,
      navigationOptions: {
        drawerLabel: 'MailTab',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
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


export default class HomeScreen extends React.Component<{}> {
  render() {
    return <HomeScreenPage/>;
  }
}

/*
export default class HomeScreen extends React.Component {
 // static navigationOptions = {
 //   title: 'Rajnishc8',
 //   //tabBarLabel: 'Home1',
 //   //headerTitle: 'Home2', 
 // };
  render() {
    const { navigate } = this.props.navigation;
    //To navigate, both methods belwo are correct.
    //onPress={ () => navigation.navigate('Search')}
    //onPress={ () => navigate('Search')} 
    
    return (
      <View style={styles.container}>
        <Text onPress={ () => navigate('DrawerToggle')} >
           Rajnishc8
        </Text>                   
      </View>
    ); 
  }
}
*/

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    color: '#FFF', 
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    //fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,    
    backgroundColor: '#2896d3',
    marginBottom: 20,
  },
  btn: {
    alignSelf: 'stretch',
    padding: 20,    
    backgroundColor: '#01c853',
    alignItems: 'center',
  },
  btn1: {
    padding: 20,    
    backgroundColor: '#01c853',
    alignItems: 'center',
    marginBottom: 20,
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

