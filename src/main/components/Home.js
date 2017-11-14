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
        renderHome = () => {
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
                                onPress={() => Alert.alert("Notificaciones!")}>
                                <Icon name="notifications" />
                            </Button>
                        </Right>

                    </Header>
                    <Content padder>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>Pantalla de inicio</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            )};


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
