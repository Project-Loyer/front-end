import React, { Component } from 'react';
import { Alert,StyleSheet} from 'react-native';
import { Container, Header, Title, Spinner, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab, View } from 'native-base';
import {color} from "../global/Color"
import {LoyerHeader} from "./LoyerHeader";

export class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {openingSession: false};
    }

    login() {
        let {onLogin} = this.props.screenProps;
        this.setState({openingSession:true});
        let theThis = this;
        setTimeout(() => {
            let {onLogin} = theThis.props.screenProps;
            onLogin(theThis.props.user_type);
        },1000);
    }

    render() {
        if (this.state.openingSession) {
            return (
                <Container>
                    <Content marginTop="20%">
                        <Text style={{alignSelf:"center",fontSize:40,marginBottom:"30%"}}>Bienvenidos a <Text style={{fontSize:40,fontWeight:'bold'}}>Loyer</Text></Text>
                        <Spinner color={color.primary.dark} />
                        <Text style={{alignSelf:"center"}}>Iniciando sesión...</Text>
                    </Content>
                </Container>
            );
        }
        return (
            <Container>
                <Header >
                    <Title style={{marginTop:15}}>Seleccionar Plan</Title>
                </Header>
                <Content>
                   <Card>
                        <CardItem header style={{backgroundColor: "#4adabc",height: 180}}>
                            <View style={{width:"100%"}}>
                                <Text style={styles.title}>Prueba</Text>
                                <Text style={styles.price}>$0<Text style={{color:"#ededed"}}>/mes.</Text></Text>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <List style={{width:"100%"}}>
                                <ListItem icon >
                                    <Left>
                                        <Icon name="md-calendar" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>30 días gratís</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-people" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>2 clientes</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-bookmarks" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>5 documentos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-paper" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>Búsqueda ilimitada de expedientes</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </CardItem>
                        <CardItem>
                            <Button block style={styles.primaryButton}
                                    onPress={() => this.login()}>
                                <Text>Seleccionar Plan</Text>
                            </Button>
                        </CardItem>
                   </Card>
                    <Card>
                        <CardItem header style={{backgroundColor: "#2eaed1",height: 180}}>
                            <View style={{width:"100%"}}>
                                <Text style={styles.title}>Inicial</Text>
                                <Text style={styles.price}>$800<Text style={{color:"#ededed"}}>/mes.</Text></Text>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <List style={{width:"100%"}}>
                                <ListItem icon >
                                    <Left>
                                        <Icon name="md-desktop" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>Un perfil como abogado</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-people" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>10 clientes</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-bookmarks" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>50 documentos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-paper" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>Búsqueda ilimitada de expedientes</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </CardItem>
                        <CardItem>
                            <Button block style={styles.primaryButton}
                                    onPress={() => this.props.navigation.navigate('Payment',{user_type: this.props.user_type})}>
                                <Text>Seleccionar Plan</Text>
                            </Button>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header style={{backgroundColor: "#f1453d",height: 180}}>
                            <View style={{width:"100%"}}>
                                <Text style={styles.title}>Empresas</Text>
                                <Text style={styles.price}>$1600<Text style={{color:"#ededed"}}>/mes.</Text></Text>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <List style={{width:"100%"}}>
                                <ListItem icon >
                                    <Left>
                                        <Icon name="md-desktop" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>5 perfiles de abogados</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-people" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>100 clientes</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-bookmarks" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>10000 documentos</Text>
                                    </Body>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="md-paper" />
                                    </Left>
                                    <Body>
                                    <Text style={{color:color.secondary.light}}>Búsqueda ilimitada de expedientes</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </CardItem>
                        <CardItem>
                            <Button block style={styles.primaryButton}
                                    onPress={() => this.props.navigation.navigate('Payment',{user_type: this.props.user_type})}>
                                <Text>Seleccionar Plan</Text>
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
    title: {
        width: "100%",
        color: "#FFFFFF",
        fontSize: 40,
        textAlign: "center",
        marginTop: -20
    },
    price: {
        width: "100%",
        color: "#FFFFFF",
        fontSize: 60,
        textAlign: "center",
        marginTop: 10
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