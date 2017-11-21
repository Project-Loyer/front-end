import React, { Component } from 'react';
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import {Button, Icon} from "native-base";
import {color} from "../global/Color";
import {AsyncStorage} from "react-native";

export class Login extends Component<{}> {
    saveData = function() {
        AsyncStorage.setItem("Logged","true");
    };

    render() {
        return (
            <ScrollView contentContainerStyle={[styles.container,{height:"100%"}]}>
                <Text style={{fontSize:40}}>Bienvenidos a </Text><Text style={{fontSize:40,fontWeight:'bold'}}>Loyer</Text>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Usuario o e-mail" value={"fburlando"} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Contraseña"
                        password={true}
                        secureTextEntry={true}
                        value={"q1w2e3r4"} />
                    <View style={styles.loginButtonsContainer}>
                        <Button iconRight
                            style={styles.mainButton}
                            onPress={() => this.saveData()/*this.props.navigation.navigate('Home')*/}>
                            <Text style={styles.buttonText}>INGRESAR</Text>
                            <Icon name="send" style={{marginLeft: 15, marginRight: 0}}/>
                        </Button>
                        <TouchableHighlight
                            onPress={ () => Alert.alert('Olvidaste tu contraseña!') }
                            underlayColor="transparent">
                            <Text style={styles.passwordForgotten}>¿Olvidó su contraseña?</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.register}>
                    <Text style={styles.noAccount}>¿No tiene cuenta?</Text>
                    <Button block
                            style={styles.mainButton}
                            onPress={() => { this.props.navigation.navigate('Singup')}}>
                        <Text style={styles.buttonText}>REGISTRARSE</Text>
                    </Button>
                    <Text style={styles.linkAccount}>...o vincule su cuenta</Text>
                    <View style={styles.linkAccountButtonsRow}>
                        <Button iconLeft primary
                            style={styles.facebookButton}
                            onPress={() => { Alert.alert('Facebook!')}}>
                            <Icon name='logo-facebook' />
                            <Text style={ [styles.textButtonSocial] }>FACEBOOK</Text>
                        </Button>
                        <Button iconLeft primary
                            style={styles.googleButton}
                            onPress={() => { Alert.alert('Google!')}}>
                            <Icon style={ {marginRight: 5} } name='logo-google'/>
                            <Text style={ [styles.textButtonSocial] }>GOOGLE</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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