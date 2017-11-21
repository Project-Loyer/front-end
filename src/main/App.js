/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import FCM from 'react-native-fcm';
import {SideBar} from "./sidebar/SideBar";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import CalendarScreen from "./components/CalendarScreen";
import {Singup} from "./components/SingUp";
import Customers from "./components/Customers";
import Documents from "./components/Documents";
import CaseFile from "./components/CaseFile";
import Document from "./components/Document";
import NewDocument from "./components/NewDocument";
import {AsyncStorage} from "react-native";
import {LoyerHeader} from "./components/LoyerHeader";

const LoyerApp = DrawerNavigator(
    {
        Home: { screen: Home },
        CalendarScreen : {screen: CalendarScreen},
        Customers : {screen: Customers},
        Documents: {screen: Documents},
        CaseFile: {screen: CaseFile},
        Document: {screen: Document},
        NewDocument: {screen: NewDocument},
        Notifications: { screen: Notifications }
    },
    {
        initialRouteName : "Home",
        contentComponent: props => <SideBar {...props} />,

    }
);

const LoyerAppLogin = StackNavigator(
    {
        Login: { screen: Login },
        Singup: { screen: Singup },
    },{
        initialRouteName : "Login",
        headerMode: "None"
    }
);

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
        token: "",
        tokenCopyFeedback: "",
        logged : false
    }

    AsyncStorage.setItem("Logged","false");

    setInterval(()=>{
      AsyncStorage.getItem("Logged").then((value) => {
          this.setState({logged : (value === "true")});
      });
    },1000);

  }

  componentDidMount(){
    FCM.getInitialNotification().then(notif => {
      this.setState({
        initNotif: notif
      })
    });
  }

  showLocalNotification() {
    FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'Test Notification',
      big_text: 'i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large',
      priority: "high",
      sound: "bell.mp3",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      number: 10
    });
  }

  scheduleLocalNotification() {
    FCM.scheduleLocalNotification({
      id: 'testnotif',
      fire_date: new Date().getTime()+5000,
      vibrate: 500,
      title: 'Hello',
      body: 'Test Scheduled Notification',
      sub_text: 'sub text',
      priority: "high",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
    });
  }

    render() {
        if (this.state.logged) {
            return <LoyerApp />;
        }
        return <LoyerAppLogin />;
    }
}
