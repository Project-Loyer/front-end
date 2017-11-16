import React from "react";

import { AppRegistry, Image, StatusBar } from "react-native";
import { ActionSheet, Container, Content, Text, List, ListItem, Left, Icon, Body, Thumbnail, H2 } from "native-base";
import {color} from "../global/Color"

const routes = ["Home","Customers","Calendar","Documents","Records","Notes","CloseSession"];
const routes_data = {
    "Home" : {
        "icon" : "home",
        "name" : "Inicio",
        "goto" : "Home",
    },
    "Customers" :{
        "icon" : "md-people",
        "name" : "Clientes",
        "goto" : "Customers",
    },
    "Calendar" : {
        "icon" : "calendar",
        "name" : "Calendario",
        "goto" : "CalendarScreen",
    },
    "Documents": {
        "icon" : "folder",
        "name" : "Documentos",
        "goto" : "DocumentsScreen",
    },
    "Records" : {
        "icon" : "md-paper",
        "name" : "Expedientes",
        "goto" : "Home",
    },
    "Notes" : {
        "icon" : "md-bookmarks",
        "name" : "Notas",
        "goto" : "NotesScreen",
    },
    "CloseSession" : {
        "icon" : "md-close-circle",
        "name" : "Cerrar Sesión",
        "goto" : "Login",
    },

};
export class SideBar extends React.Component {
    render() {
        console.log(this.props);
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
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem style={{marginBottom:3,marginTop:3,backgroundColor: "transparent"}} icon button onPress={() => this.props.navigation.navigate(routes_data[data].goto)}>
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