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
import {Button, Icon, Container, Content, Spinner} from "native-base";
import {color} from "../global/Color";
import UsersMock from "../mock/Users";
import {AsyncStorage} from "react-native";


export class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
          starting : false,
          user: "fburlando@estudio.com",
          pass: 'q1w2e3r4'
        };
    }

    saveData = function() {
        let user = UsersMock.createSession(this.state.user, this.state.pass);
        if (user) {
            //AsyncStorage.setItem("Logged","true");
            //AsyncStorage.setItem("UserType", user.user_type);

            this.setState({starting:true});
            let {onLogin} = this.props.screenProps;
            setTimeout(function () {
                onLogin(user.user_type);
            },1000);
        }
    };

    handleUserChange = (text) => {
        this.setState({ user: text })
    };

    handlePassChange = (text) => {
        this.setState({ pass: text })
    };

    render() {
        if (this.state.starting) {
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
            <ScrollView contentContainerStyle={[styles.container,{height:"100%"}]}>
                <Text style={{fontSize:40}}>Bienvenidos a </Text><Text style={{fontSize:40,fontWeight:'bold'}}>Loyer</Text>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="E-mail"
                        value={this.state.user}
                        onChangeText={this.handleUserChange} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Contraseña"
                        password={true}
                        secureTextEntry={true}
                        value={this.state.pass}
                        onChangeText={this.handlePassChange} />
                    <View style={styles.loginButtonsContainer}>
                        <Button iconRight
                            style={styles.mainButton}
                            onPress={() => this.saveData()}>
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