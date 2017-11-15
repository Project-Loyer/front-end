import React, { Component } from 'react';

import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail} from 'native-base';
import {color} from "../global/Color"

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
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name={'person'} style={{paddingRight:10}}/>
                                <Body>
                                    <Text>Carlos Fachinetti</Text>
                                    <Text note>No hay actividad pendiente</Text>
                                </Body>
                            </Left>
                            <Icon name={'md-checkmark-circle'} style={styles.iconCustomerOk}/>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-bookmarks" />
                                    </Left>
                                    <Body>
                                    <Text>2 Casos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-pin" />
                                    </Left>
                                    <Body>
                                    <Text>Rawson, Buenos Aires, Argentina</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-paper" />
                                    </Left>
                                    <Body>
                                    <Text>30 documentos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-calendar" />
                                    </Left>
                                    <Body>
                                    <Text>Próximo evento 12 de diciembre</Text>
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
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name={'person'} style={{paddingRight:10}}/>
                                <Body>
                                <Text>Juan Carlos Cané</Text>
                                <Text note style={{color: "red"}}>Hay actividad pendiente</Text>
                                </Body>
                            </Left>
                            <Icon name={'md-information-circle'} style={styles.iconCustomerAlert}/>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-bookmarks" />
                                    </Left>
                                    <Body>
                                    <Text>2 Casos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-pin" />
                                    </Left>
                                    <Body>
                                    <Text>Rawson, Buenos Aires, Argentina</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-paper" />
                                    </Left>
                                    <Body>
                                    <Text>30 Documentos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-calendar" />
                                    </Left>
                                    <Body>
                                    <Text>Próximo evento 12 de diciembre</Text>
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
    }
});