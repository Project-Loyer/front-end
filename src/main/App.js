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
import {Login} from "./components/Login";
import {StackNavigator} from "react-navigation";
import {Home} from "./components/Home";

const LoyerApp = StackNavigator({
    Home: { screen: Home },
    Login: { screen: Login }
});

export default class App extends Component<{}> {
  render() {
    return <LoyerApp />;
  }
}
