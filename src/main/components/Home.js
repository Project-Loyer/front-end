import React, { Component } from 'react';

import { StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner, Badge, Thumbnail } from "native-base";
import {LoyerHeader} from "./LoyerHeader";
import Color from 'react-native-material-color';



export class Home extends Component {

    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} />
                <Content padder>
                    <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>Resumen de su día</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name={"calendar"} />
                                <Body>
                                <Text>Calendario</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Hoy no hay ningún evento</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name={"ios-paper"} />
                                <Body>
                                <Text>Documetos próximos a vencer</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>Expediente 23-910-A2-1B3</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Text>Expediente 23-910-A2-1B5</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Text>Expediente 23-745-F10-897</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>Resumen del Mes</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="md-analytics" />
                                <Body>
                                <Text style={{color:Color.Green,fontWeight: 'bold'}}>3 Nuevos clientes</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                <Text style={{fontWeight: 'bold'}}>Carlos F.</Text>, <Text style={{fontWeight: 'bold'}}>Juan Carlos C.</Text> y <Text style={{fontWeight: 'bold'}}>Amado B.</Text> han solicitado tus servicios este mes.
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F1F8E9',
        padding: 24
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 156
    },
    notificationsBadge: { //NOTIF
        width: 15,
        height: 15,
        minWidth: 15,
        top: 5
    },
    notificationsBadgeNumber: {
        color: '#FFFFFF',
        fontSize: 10
    }
});
