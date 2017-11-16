/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    Button,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {StackNavigator,DrawerNavigator} from "react-navigation";
import {SideBar} from "./sidebar/SideBar";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import CalendarScreen from "./components/CalendarScreen";
import {Singup} from "./components/SingUp";
import Customers from "./components/Customers";

/*
const LoyerAppLogin = StackNavigator({
    Login: { screen: Login },
    Singup: { screen: Singup }
}, {
    initialRouteName: 'Login',
});
*/

const LoyerApp = DrawerNavigator(
    {
        Home: { screen: Home },
        CalendarScreen : {screen: CalendarScreen},
        Customers : {screen: Customers},
        Login: { screen: Login },
        Singup: { screen: Singup }
    },
    {
        initialRouteName : "Login",
        contentComponent: props => <SideBar {...props} />
    }
);

export default class App extends Component<{}> {
  render() {
    return <LoyerApp />;
  }
}