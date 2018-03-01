import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {Item, Input, Container, Header, View, Title, Content, List, ListItem, ListView, Text,Button , Icon, Left, Body, Right, Card, CardItem,Thumbnail,Fab} from 'native-base';
import {color} from "../global/Color";
import {LoyerHeader} from "./LoyerHeader";
import UsersMock from "../mock/Users";

export class LawyerProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lawyer: props.navigation.state.params.lawyer,
            contactMessage:false,
            message : ""
        };
    }

    goToPayment() {
        this.props.navigation.navigate('Payment', {
            onSuccess : () => {
                //TODO: Generar notificacion con message o algun `El usuario ${UsersMock.loggedUser.name} quiere hacerte una consulta. ${this.message}`
                this.props.navigation.navigate('ClientHome');
            }
        });
    }

    render() {
        if (this.state.contactMessage) {
            return (
                <Container>
                    <LoyerHeader {...this.props} title={this.state.lawyer.name}/>
                    <Content style={{flex:1,padding:10}}>
                        <Text style={{fontSize:25}}>
                            <Text style={{fontWeight:'bold',fontSize:27}}>{this.state.lawyer.name}</Text> se comunicará contigo por telefono en los próximos días
                        </Text>
                        <Text style={{marginVertical:10}}>Tu número de contacto es {UsersMock.loggedUser.phone}</Text>
                        <Item regular style={{height:150, alignSelf: 'flex-start',marginTop:10}}>
                            <Input
                                onChangeText={(t) => this.setState({message:t})}
                                style={{alignSelf: 'flex-start', flex:1}}
                                multiline={true}
                                editable={true}
                                placeholder='Motivo de contacto (opcional)' />
                        </Item>
                    </Content>
                    <Button onPress={()=>this.goToPayment()}
                            full style={{marginTop:30,height:50,backgroundColor:color.primary.dark}}>
                        <Text style={{color:color.primary.text,fontSize:25}}>CONFIRMAR</Text>
                    </Button>
                    <Text style={{alignSelf:"center",fontSize:10, marginTop:5,color:color.secondary.light}}>
                        El precio para contactarlo por medio de la app es de ${Math.max( parseInt(this.state.lawyer.lawyer_info.fee) * 0.005,100 )}
                    </Text>
                </Container>

            );
        }
        return (
            <Container>
                <LoyerHeader {...this.props} title={this.state.lawyer.name}/>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.state.lawyer.lawyer_info.picture }} />
                                    <Body>
                                    <Text>{this.state.lawyer.name}</Text>
                                    <Text style={styles.textNoPendingActivities} note>{this.state.lawyer.lawyer_info.university}</Text>
                                    </Body>
                                </Left>
                                <Icon name="md-star" style={{color:"#ffb506"}}/><Text style={{color:"#ffb506",marginLeft:-8}}>{this.state.lawyer.lawyer_info.rank}</Text>
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
                                    <Text style={{marginBottom:8}}>{this.state.lawyer.lawyer_info.specialties.join(", ")}.</Text>
                                    <Text>{this.state.lawyer.lawyer_info.description}</Text>
                                </View>
                            </CardItem>
                        </Card>
                        <Button onPress={()=>this.setState({contactMessage:true})}
                            full iconRight style={{marginVertical:30,height:60,backgroundColor:color.primary.dark}}>
                            <Text style={{color:color.primary.text,fontSize:25}}>CONTACTAR</Text>
                            <Icon name='md-call' style={{color:color.primary.text,fontSize:30}}/>
                        </Button>
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