import React, { Component } from 'react';
import { Button, List, ListItem, Text, Icon, Left, Body, Right} from "native-base";
import {
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {color} from "../global/Color"
import CustomersMocks from "../mock/Clients";


export class NewCustomer extends Component<{}>{
    constructor(props) {
        super(props);
        this.state = {
            customer: {
                name: 'Name',
                lastName: 'Last Name',
                pendingActivities: 0,
                cases: 0,
                address: "CABA, Argentina",
                documents: 0
            },
            shared: true
        };
    }

    saveCustomer() {
        CustomersMocks.addCustomer({...this.state.customer});
        this.props.navigation.navigate("Customers");
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Button
                    transparent
                    title="Clientes"
                    onPress={() => this.props.navigation.navigate('Customers')}>
                    <Icon name="ios-arrow-back" style={{color :color.secondary.color}} />
                </Button>
                <Text style={{fontSize:30}}>Nuevo cliente</Text>
                <View style={styles.addCustomerForm}>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-create" />
                            </Left>
                            <Body>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Nombre"
                                    onChangeText={(content) => this.setState({customer: {...this.state.customer, "name" : content } })} />
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-create" />
                            </Left>
                            <Body>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Apellido"
                                onChangeText={(content) => this.setState({customer: {...this.state.customer, "lastName" : content } })}/>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-calendar" />
                            </Left>
                            <Body>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Fecha de nacimiento"
                                    keyboardType='numeric'
                                    onChangeText={(content) => this.setState({customer: {...this.state.customer, "birthDay" : content } })}/>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-mail" />
                            </Left>
                            <Body>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"
                                    keyboardType='email-address'
                                    onChangeText={(content) => this.setState({customer: {...this.state.customer, "email" : content } })}/>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-call" />
                            </Left>
                            <Body>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Telefono"
                                    keyboardType='numeric'
                                    onChangeText={(content) => this.setState({customer: {...this.state.customer, "phone" : content } })}/>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-pin" />
                            </Left>
                            <Body>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Localidad"
                                    onChangeText={(content) => this.setState({customer: {...this.state.customer, "address" : content } })}/>
                            </Body>
                        </ListItem>
                    </List>
                </View>
                <Button block
                        style={styles.addCustomerButton}
                        onPress={() => { this.saveCustomer()}}>
                    <Text style={{color: '#FFFFFF',fontSize: 18}}>Guardar cliente</Text>
                </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 24,
    },
    addCustomerForm:{
        marginTop: 36,
        alignSelf: 'stretch'
    },
    textInput: {
        height: 50,
        fontSize: 20
    },
    addCustomerButton: {
        backgroundColor: color.primary.dark,
        paddingHorizontal: 16,
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        right: '7%'
    }
});