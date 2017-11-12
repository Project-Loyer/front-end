import React, { Component } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import {Button} from "native-base";

export class Login extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Usuario o e-mail"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Contraseña"
                        password={true}
                        secureTextEntry={true}
                    />
                    <View style={styles.loginButtonsContainer}>
                        <Button
                            style={styles.mainButton}
                            onPress={() => { Alert.alert('Ingresaste!')}}>
                            <Text style={styles.buttonText}>INGRESAR</Text>
                        </Button>
                        <TouchableHighlight
                            onPress={ () => Alert.alert('Olvidaste tu contraseña!') }
                            underlayColor="transparent"
                        >
                            <Text style={styles.passwordForgotten}>¿Olvidó su contraseña?</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.register}>
                    <Text style={styles.noAccount}>¿No tiene cuenta?</Text>
                    <Button block
                            style={styles.mainButton}
                            onPress={() => { Alert.alert('A registrarse!')}}>
                        <Text style={styles.buttonText}>REGISTRARSE</Text>
                    </Button>
                    <Text style={styles.linkAccount}>...o vincule su cuenta</Text>
                    <View style={styles.linkAccountButtonsRow}>
                        <Button large
                            style={styles.facebookButton}
                            onPress={() => { Alert.alert('Facebook!')}}>
                            <Text style={styles.buttonText}>FACEBOOK</Text>
                        </Button>
                        <Button large
                            style={styles.googleButton}
                            onPress={() => { Alert.alert('Google!')}}>
                            <Text style={styles.buttonText}>GOOGLE</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F1F8E9',
        padding: 24,
    },
    loginForm: {
        marginTop: 64,
        alignSelf: 'stretch'
    },
    textInput: {
        height: 64
    },
    loginButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 4,
        marginBottom: 96
    },
    passwordForgotten: {
        color: '#8BC34A',
        textDecorationLine: 'underline'
    },
    mainButton: {
        backgroundColor: '#8BC34A',
        paddingHorizontal: 16,
        fontColor: 'white',
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
    register: {
        alignSelf: 'stretch'
    },
    noAccount: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 12
    },
    linkAccount: {
        textAlign: 'center',
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1E88E5',
        paddingHorizontal: 16,
        marginRight: 12
    },
    googleButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F44336',
        paddingHorizontal: 16,
        marginLeft: 12
    }
});
