import React, { Component } from 'react';

import { Button, Icon} from "native-base";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {color} from "../global/Color"


export class Singup extends Component<{}>{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Button
                    transparent
                    title="Inicio"
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Icon name="ios-arrow-back" style={{color :color.secondary.color}} />
                </Button>
                <Text style={{fontSize:40,fontWeight:'bold'}}>Loyer</Text><Text style={{fontSize:40}}>Registración</Text>
                <View style={styles.singupForm}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nombre de usuario" />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Contraseña"
                        password={true}
                        secureTextEntry={true} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Repita la contraseña"
                        password={true}
                        secureTextEntry={true} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        keyboardType='email-address'/>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Fecha de nacimiento"
                        keyboardType='numeric'/>
                </View>
                <Button block
                        style={styles.mainButton}
                        onPress={() => { this.props.navigation.navigate('Login')}}>
                    <Text style={styles.buttonText}>REGISTRARSE</Text>
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
    loginForm: {
        marginTop: 36,
        alignSelf: 'stretch'
    },
    singupForm:{
        marginTop: 36,
        alignSelf: 'stretch'
    },
    textInput: {
        height: 50
    },
    loginButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 4,
        marginBottom: 30
    },
    passwordForgotten: {
        //color: '#8BC34A',
        textDecorationLine: 'underline'
    },
    mainButton: {
        backgroundColor: color.secondary.color,
        paddingHorizontal: 16,
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        right: '7%'
        //textAlign: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        //textAlign: 'center',
        fontSize: 18
    },
    register: {
        alignSelf: 'stretch'
    },
    noAccount: {
        //textAlign: 'center',
        fontSize: 24,
        marginVertical: 12
    },
    linkAccount: {
        //textAlign: 'center',
        fontSize: 18,
        marginTop: 24
    },
    linkAccountButtonsRow: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        paddingVertical: 12
    },
    facebookButton: {
        //flex: 1,
        width: "48%",
        justifyContent: 'flex-start',
        backgroundColor: color.general.facebook,
        paddingHorizontal: 16,
        marginRight: 5,
    },
    googleButton: {
        //flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: color.general.google,
        paddingHorizontal: 16,
        marginLeft: 5,
        width: "48%"
    },
    textButtonSocial : {
        color: "#FFFFFF",
        fontSize : 18,
        marginLeft: 10
    }
});