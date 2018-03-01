import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {Container, Header, View, Title, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab} from 'native-base';
import {color} from "../global/Color";
import {LoyerHeader} from "./LoyerHeader";

export class LawyerProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lawyer: props.navigation.state.params.lawyer
        };
    }
    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} title={this.state.lawyer.name}/>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.state.lawyer.lawyer_info.picture }} />
                                    <Body>
                                    <Text>{this.state.lawyer.name}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <List style={{width:"100%"}}>
                                    <ListItem icon >
                                        <Left>
                                            <Icon name="md-pricetag" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:"#48d339"}}>$ {this.state.lawyer.lawyer_info.fee}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon >
                                        <Left>
                                            <Icon name="md-call" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.lawyer.phone}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon >
                                        <Left>
                                            <Icon name="md-mail" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.lawyer.email}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="md-pin" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.lawyer.lawyer_info.location}</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem icon>
                                        <Left>
                                            <Icon name="md-code-working" />
                                        </Left>
                                        <Body>
                                        <Text style={{color:color.secondary.light}}>{this.state.lawyer.lawyer_info.experience} años de experiencia.</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            </CardItem>
                            <CardItem footer>
                                <View>
                                <Text style={{marginBottom:8}}>Descripción: </Text>
                                <Text>{this.state.lawyer.lawyer_info.description}</Text>
                                </View>
                            </CardItem>
                        </Card>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textListiItem: {
        color : "#000000",
    },
    iconlawyerOk: {
        color : "#00BF27",
    },
    iconlawyerAlert: {
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