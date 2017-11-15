import React from "react";

import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Icon, Body } from "native-base";

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
        return (
            <Container>
                <Content>
                    <Content>

                    </Content>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem icon button onPress={() => this.props.navigation.navigate(routes_data[data].goto)}>
                                    <Left>
                                        <Icon name={routes_data[data].icon} />
                                    </Left>
                                    <Body>
                                        <Text>{routes_data[data].name}</Text>
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
