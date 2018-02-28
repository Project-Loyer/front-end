import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {Container, Header, Title, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab, Tab, Tabs, TabHeading} from 'native-base';
import {color} from "../global/Color";
import {LoyerHeader} from "./LoyerHeader";

export class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customer: props.navigation.state.params.customer
        };
    }
    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} title={this.state.customer.name + " " + this.state.customer.lastName}/>

                <Tabs initialPage={0}>
                    <Tab heading={ <TabHeading><Icon name="md-person" /><Text>Perfil</Text></TabHeading>}>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={this.state.customer.avatar} />
                                    <Body>
                                    <Text>{this.state.customer.name} {this.state.customer.lastName}</Text>
                                    <Text style={styles.textNoPendingActivities} note>{this.state.customer.cases + " casos, " + this.state.customer.documents + " documentos."}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <List style={{width:"100%"}}>
                                    <ListItem icon >
                                        <Left>
                                            <Icon name="md-call" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.customer.phone}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon >
                                        <Left>
                                            <Icon name="md-mail" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.customer.email}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="md-pin" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.customer.address}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="md-calendar" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.customer.birthDay}</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            </CardItem>
                        </Card>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="md-briefcase" /><Text>Actividad</Text></TabHeading>}>
                        <Body>
                            <Icon name={ this.state.customer.pendingActivities ? 'md-information-circle' : 'md-checkmark-circle'} style={this.state.customer.pendingActivities ? styles.iconCustomerAlert : styles.iconCustomerOk} />
                            <Text style={{color:color.secondary.light}}>No hay actividad pendiente</Text>
                        </Body>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="md-calendar" /><Text>Historial</Text></TabHeading>}>
                        <Body>
                            <Icon name="md-sad" />
                            <Text style={{color:color.secondary.light}}>No hay historial disponible</Text>
                        </Body>
                    </Tab>
                </Tabs>
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