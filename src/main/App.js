import React, { Component } from 'react';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import {AsyncStorage} from "react-native";
import {Container} from "native-base";
import FCM from 'react-native-fcm';
import {SideBar} from "./sidebar/SideBar";
import {ClientSideBar} from "./sidebar/ClientSideBar";
import {
    Login, Home, CalendarScreen,
    Singup, Customers, Customer, Documents,
    CaseFile, CaseFiles, Document,
    NewDocument, Notifications,
    NewCustomer, Payment
} from "./components";
import { ClientHome } from './components/ClientHome';
const LoyerApp = DrawerNavigator(
    {
        Home: { screen: Home },
        CalendarScreen : {screen: CalendarScreen},
        Customers : {screen: Customers},
        Customer : {screen: Customer},
        Documents: {screen: Documents},
        CaseFile: {screen: CaseFile},
        CaseFiles : {screen : CaseFiles},
        Document: {screen: Document},
        NewDocument: {screen: NewDocument},
        NewCustomer: {screen: NewCustomer},
        Notifications: { screen: Notifications },
        Payment: { screen: Payment }
    },
    {
        initialRouteName : "Home",
        contentComponent: props => <SideBar {...props} />,

    }
);

const ClientApp = DrawerNavigator(
    {
        ClientHome: { screen: ClientHome }
    },
    {
        initialRouteName: "ClientHome",
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
        logged : false,
        isLoading : true,
    };

    setInterval(() => {
        AsyncStorage.getItem("Logged").then((value) => {
            this.setState({
                logged : (value === "true"),
                isLoading: false
            });
        });
        AsyncStorage.getItem("UserType").then((value) => {
            this.setState({
                userType: value
            })
        });
    },100);

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
        if (this.state.isLoading) {
            return <Container/>;
        }
        if (this.state.logged) {
            if (this.state.userType === "client") {
                return <ClientApp />;
            }
            return <LoyerApp/>;
        }
        return <LoyerAppLogin />;
    }
}
