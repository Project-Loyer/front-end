import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {Alert} from 'react-native';

export default class Documents extends Component {
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
                    <Title>Documentos</Title>
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
                <Content>
                    <List>
                        <ListItem itemHeader first>
                            <Text>RECIENTES</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>APELACION Pierri</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>DEMANDA Isidoro Gomez</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>EXPEDIENTES</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>063209/2017</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>063021/2017</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>000012/2016</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}