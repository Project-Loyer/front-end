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

export default class App extends Component<{}> {
  render() {
    return (
      <Login />
    );
  }
}
