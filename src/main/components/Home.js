import React, { Component } from 'react';

import { StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner, Badge, Thumbnail, Tab, Tabs, List, ListItem} from "native-base";
import {LoyerHeader} from "./LoyerHeader";
import Color from 'react-native-material-color';

import renderIf from "../util/renderIf";
import {color} from "../global/Color.js";


export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.closeActivityIndicator = () => setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    componentDidMount = () => this.closeActivityIndicator();
    componentWillUnmount = () => this.setState({loading: true});
    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} />
                <Tabs initialPage={0}>
                    <Tab heading="Su día">
                        <Content padder>
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
                                    <List style={{width:"100%"}}>
                                        <ListItem avatar>
                                            <Left>
                                                <Thumbnail source={require('../images/cario.jpg')}/>
                                            </Left>
                                            <Body >
                                            <Text>Cobrar hoy a Juan Cario</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem avatar>
                                            <Left>
                                                <Thumbnail source={require('../images/maria.jpg')}/>
                                            </Left>
                                            <Body >
                                            <Text>Tienes una videollamada con Maria Vergara</Text>
                                            </Body>
                                            <Right>
                                                <Text note>13:00 hs</Text>
                                            </Right>
                                        </ListItem>
                                    </List>
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
                                        <Text note>18:00 hs</Text>
                                    </Right>
                                </CardItem>
                                <CardItem>
                                    <Text>Expediente 23-910-A2-1B5</Text>
                                    <Right>
                                        <Text note>18:00 hs</Text>
                                    </Right>
                                </CardItem>
                                <CardItem>
                                    <Text>Expediente 23-745-F10-897</Text>
                                    <Right>
                                        <Text note>18:00 hs</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Content>
                    </Tab>
                    <Tab heading="Su mes">
                        <Content padder>
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
                    </Tab>
                </Tabs>
            </Container>
        )};
    renderHome = () => {


        return (
            <Container>
                {renderIf(this.state.loading)(
                    <Content marginTop="50%">
                        <Spinner color={color.primary.dark} />
                    </Content>
                )}

                {renderIf(!this.state.loading)(
                    renderHome
                )}
            </Container>
        );
    }
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
