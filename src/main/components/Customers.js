import React, { Component } from 'react';

import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Title, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab } from 'native-base';
import {color} from "../global/Color"
import {LoyerHeader} from "./LoyerHeader";

const customers = [
    {
        name: "Carlos",
        lastName: "Fachinetti",
        avatar : require("../images/cfachinetti.jpg"),
        cases: 2,
        address: "Rawson, Buenos Aires, Argentina",
        documents: 30,
        dateNextEvent: "13 de diciembre"
    },
    {
        name: "Juan Carlos",
        lastName: "Cané",
        avatar : require("../images/juancane.jpg"),
        pendingActivities: 1,
        cases: 1,
        address: "Chivilcoy, Buenos Aires, Argentina",
        documents: 5,
        dateNextEvent: "25 de noviembre"
    },
    {
        name: "Esteban",
        lastName: "Cario",
        avatar : require("../images/cario.jpg"),
        pendingActivities: 1,
        cases: 8,
        address: "Carmen de Areco, Buenos Aires, Argentina",
        documents: 250,
        dateNextEvent: "6 de febrero"
    },
    {
        name: "Julio",
        lastName: "Barbosco",
        avatar : require("../images/avatarDefault.png"),
        pendingActivities: 0,
        cases: 1,
        address: "Junin, Buenos aires, Argentina",
        documents: 3,
        dateNextEvent: "5 de enero de 2018"
    }
];

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} title={"Clientes"}/>
                <Button icon style={{width:58,height:58,borderRadius:30,position:"absolute",bottom: 10,right: 10,backgroundColor:color.primary.dark}}>
                    <Icon name='md-person-add' />
                </Button>
                <Content>
                    <List
                        dataArray={customers}
                        renderRow={ customer => {
                            return (
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={customer.avatar} />
                                            <Body>
                                            <Text>{customer.name} {customer.lastName}</Text>
                                            <Text style={customer.pendingActivities ? styles.textPendingActivities : styles.textNoPendingActivities} note>{customer.pendingActivities ? "Tiene actividad pendiente" : "No hay actividad pendiente"}</Text>
                                            </Body>
                                        </Left>
                                        <Icon name={ customer.pendingActivities ? 'md-information-circle' : 'md-checkmark-circle'} style={customer.pendingActivities ? styles.iconCustomerAlert : styles.iconCustomerOk} />
                                    </CardItem>
                                    <CardItem cardBody>
                                        <List style={{width:"100%"}}>
                                            <ListItem icon >
                                                <Left>
                                                    <Icon name="md-bookmarks" />
                                                </Left>
                                                <Body>
                                                <Text style={{color:color.secondary.light}}>{customer.cases} Casos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem icon>
                                                <Left>
                                                    <Icon name="md-pin" />
                                                </Left>
                                                <Body>
                                                <Text style={{color:color.secondary.light}}>{customer.address}</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem icon>
                                                <Left>
                                                    <Icon name="md-paper" />
                                                </Left>
                                                <Body>
                                                <Text style={{color:color.secondary.light}}>{customer.documents} documentos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem icon>
                                                <Left>
                                                    <Icon name="md-calendar" />
                                                </Left>
                                                <Body>
                                                <Text style={{color:color.secondary.light}}>Próximo evento {customer.dateNextEvent}</Text>
                                                </Body>
                                            </ListItem>
                                        </List>
                                    </CardItem>
                                    <CardItem>
                                        <Button block style={styles.primaryButton}>
                                            <Text>Ver cliente</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textListiItem: {
        color : "#000000",
    },
    iconCustomerOk: {
        color : "#00BF27",
    },
    iconCustomerAlert: {
        color : "#ff0800",
    },
    primaryButton: {
        backgroundColor: color.secondary.light,
        flex: 1,
    },
    textPendingActivities: {
        color : "#ff0800"
    },
    textNoPendingActivities: {
        color: "#9a9a9a"
    }
});