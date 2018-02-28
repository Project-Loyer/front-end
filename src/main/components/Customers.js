import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Title, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab } from 'native-base';
import {color} from "../global/Color"
import {LoyerHeader} from "./LoyerHeader";
import CustomersMocks from "../mock/Clients";

export class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers : CustomersMocks.customers
        };
    }

    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} title={"Clientes"}/>
                <Content>
                    <List
                        dataArray={this.state.customers}
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
                                                <Text style={{color:color.secondary.light}}>{customer.dateNextEvent ? ("Próximo evento " + customer.dateNextEvent) : "No hay eventos próximos"}</Text>
                                                </Body>
                                            </ListItem>
                                        </List>
                                    </CardItem>
                                    <CardItem>
                                        <Button block style={styles.primaryButton}
                                                onPress={() => this.props.navigation.navigate('Customer', {customer: customer})}>
                                            <Text>Ver cliente</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            );
                        }}
                    />
                </Content>
                <Button icon
                        style={{width:58,height:58,borderRadius:30,position:"absolute",bottom: 10,right: 10,backgroundColor:color.primary.dark}}
                        onPress={() => this.props.navigation.navigate('NewCustomer')}>
                    <Icon name='md-person-add' />
                </Button>
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