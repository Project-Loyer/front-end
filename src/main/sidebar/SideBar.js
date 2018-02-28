import React from "react";

import {AsyncStorage, Alert, View} from "react-native";

import { ActionSheet, Container, Content, Text, List, ListItem, Left, Icon, Body, Thumbnail, H2 } from "native-base";
import {color} from "../global/Color"

const routes = ["Home","Customers","Calendar","Documents","CaseFiles","CloseSession"];
const routes_data = {
    "Home" : {
        "icon" : "home",
        "name" : "Inicio",
        "goto" : "Home",
        "type" : "lawyer"
    },
    "Customers" :{
        "icon" : "md-people",
        "name" : "Clientes",
        "goto" : "Customers",
        "type" : "lawyer"
    },
    "Calendar" : {
        "icon" : "calendar",
        "name" : "Calendario",
        "goto" : "CalendarScreen",
        "type" : "lawyer"
    },
    "Documents": {
        "icon" : "folder",
        "name" : "Documentos",
        "goto" : "Documents",
        "type" : "lawyer"
    },
    "CaseFiles" : {
        "icon" : "md-paper",
        "name" : "Expedientes",
        "goto" : "CaseFiles",
        "type" : "lawyer"
    },
    "CloseSession" : {
        "icon" : "md-close-circle",
        "name" : "Cerrar Sesión",
        "goto" : "deleteData",
        "type" : "all"
    },

};
export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waiting: true,
            userType: ''
        }
        AsyncStorage.getItem("UserType").then((userType) => { 
            this.setState({
                waiting: false,
                userType: userType
            })
        })  
    }

    deleteData = function () {
        AsyncStorage.setItem("Logged","false");
    };

    render() {
        if (this.state.waiting) {
            return <View />
        } else {
            return (
                <Container>
                    <Content>
                        <Content style={{height:160, backgroundColor: color.secondary.color}}>
                            <Body style={{height:160,top:25,paddingLeft:10, alignSelf:'flex-start'}}>
                                <Left>
                                    <Thumbnail large source={{uri: 'http://necocheahoy.com/wp-content/uploads/2017/05/1-104.jpg'}} />
                                    <H2 style={{marginTop: 20,bottom:0,color:color.secondary.text}}>Hola, Burlando</H2>
                                </Left>
                            </Body>
                        </Content>
                        <List
                            dataArray={routes.filter((route) => { return routes_data[route].type === this.state.userType || routes_data[route].type === "all"; })}
                            renderRow={data => {
                                let action = () => {
                                    this.props.navigation.navigate(routes_data[data].goto);
                                };
                                if (routes_data[data].goto === "deleteData") {
                                    action = () => {this.deleteData()};
                                }
                                return (
                                    <ListItem style={{marginBottom:3,marginTop:3,backgroundColor: "transparent"}} icon button onPress={action}>
                                        <Left>
                                            <Icon style={{fontSize:22, color: color.secondary.light}} name={routes_data[data].icon} />
                                        </Left>
                                        <Body style={{backgroundColor: "transparent",borderBottomWidth:0}}>
                                            <Text style={{paddingLeft:10,fontSize: 15, color: color.secondary.dark}}>{routes_data[data].name}</Text>
                                        </Body>
                                    </ListItem>
                                );                        
                            }}
                        />
                    </Content>
                </Container>
            );
        }
    }
}
