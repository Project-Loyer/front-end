/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {DrawerNavigator, StackNavigator} from "react-navigation";
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

const LoyerApp = DrawerNavigator(
    {
        Home: { screen: Home },
        CalendarScreen : {screen: CalendarScreen},
        Customers : {screen: Customers},
        Documents: {screen: Documents},
        CaseFile: {screen: CaseFile},
        Document: {screen: Document},
        NewDocument: {screen: NewDocument},

    },
    {
        initialRouteName : "Home",
        contentComponent: props => <SideBar {...props} />
    }
);

const LoyerAppLogin = StackNavigator(
    {
        Login: { screen: Login },
        Singup: { screen: Singup }
    },{
        initialRouteName : "Login",
        headerMode: "None"
    }
);

export default class App extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
          logged : false
        };

        AsyncStorage.setItem("Logged","false");

        setInterval(()=>{
            AsyncStorage.getItem("Logged").then((value) => {
                this.setState({logged : (value === "true")});
            });
        },1000);

    }

    render() {
        if (this.state.logged) {
            return <LoyerApp />;
        }
        return <LoyerAppLogin />;
    }
}
