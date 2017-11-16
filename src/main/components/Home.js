import React, { Component } from 'react';
import {Alert} from 'react-native';

import { StatusBar, StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner } from "native-base";


import renderIf from "../util/renderIf";
import {color} from "../global/Color.js";

export class Home extends Component<{}> {
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
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Loyer</Title>
                    </Body>
                    <Right>                    
                        <Button
                            transparent
                            onPress={() => Alert.alert("Perfil de Usuario")}>
                            <Icon name="person" />
                        </Button>
                        <Button
                            transparent
                            onPress={() => Alert.alert("Notificaciones!")}>
                            <Icon name="notifications" />
                        </Button>
                    </Right>

                </Header>
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
                </Content>
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
    }
});
