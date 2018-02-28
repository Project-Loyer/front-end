import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PhoneInput from 'react-native-phone-input';
import { Container, Label, Header, Content, Button, Icon, Input, Item, Form, List, ListItem, CheckBox, Spinner} from "native-base";
import Collapsible from 'react-native-collapsible';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {color} from "../global/Color";
import validateEmail from "../util/utils";

import UsersMock from "../mock/Users";

const SingUp_UserType = {
    UNDEFINED : null,
    LAWYER : UsersMock.TYPE_LAWYER,
    CLIENT : UsersMock.TYPE_CLIENT,
};


class SignUpWaitConfirmationCode extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            timeOutId : null,
            code : ""
        }
    }

    componentDidMount() {
        var theThis = this;
        let tOutId = setTimeout(function () {
            theThis.setState({code:"12345",timeOutId:null});
            theThis.props.onSuccess();
        },3000);
        this.setState({timeOutId:tOutId});
    }

    componentWillUnmount() {
        if (this.state.timeOutId) {
            clearTimeout(this.state.timeoutId);
            this.setState({timeOutId:null});
        }
    }

    renderOk() {
        if (this.state.code.length > 0 && this.state.code === "12345") {
            return (
                <View style={{alignItems:'center',marginTop:50}}>
                    <Text style={{color:'green',fontSize: 40}}>Codigo aceptado <Icon style={{color:'green'}} name='md-checkmark-circle'/></Text>
                </View>
            );
        }
        return null;
    }

    render() {
        let message = `Ingrese codigo de seguridad que recibira por mensaje de texto.`;

        return (
            <View style={styles.singupForm}>
                <Text style={{alignSelf:'center', fontSize: 30, color: color.secondary.dark}}>Verificación de seguridad</Text>
                <Form>
                    <Item style={{alignSelf:"center",width: 150}} floatingLabel>
                        <Input value={this.state.code} keyboardType="numeric" style={{fontSize:50}} />
                    </Item>
                </Form>
                <Text style={{marginTop: 50}}>
                    {message}
                </Text>
                { this.renderOk() }
            </View>
        );
    }
}

class SingupSelectUserType extends Component<{}> {
    render() {
        let {onSelectUserType} = this.props;
        return (
            <View style={styles.singupForm}>
                    <Button style={{marginVertical:20, backgroundColor: color.secondary.light}} full large iconLeft onPress={() => onSelectUserType(SingUp_UserType.LAWYER)}>
                        <Icon style={{color: color.secondary.text}} name='md-person'/>
                        <Text style={{fontSize: 20, color: color.secondary.text}}>SOY ABOGADO</Text>
                    </Button>

                    <Text style={{alignSelf: 'center', color: color.general.BLACK, fontSize: 18}}>Ó</Text>

                    <Button style={{marginVertical:20, backgroundColor: color.secondary.light}} full large iconLeft onPress={() => onSelectUserType(SingUp_UserType.CLIENT)}>
                        <Icon style={{color: color.secondary.text}} name='md-search'/>
                        <Text style={{fontSize: 20, color: color.secondary.text}}>BUSCO ABOGADO</Text>
                    </Button>

            </View>
        );
    }
}

class SingupBasicInformation extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            name :                  "Tomas Bert",
            nameError:              false,
            password:               "asdf12345",
            passwordError:          false,
            confirm_password:       "asdf12345",
            confirm_passwordError:  false,
            email:                  "tomasbert12@gmail.com",
            emailError:             false,
            phone:                  "1162956888",
            message_error:          "",
        }
    }

    showError = (message, ref) => {
        let newState = {message_error:message};
        newState[ref] = true;
        this.setState(newState);
    };

    confirm() {
        this.setState({
            nameError:false,
            passwordError:false,
            confirm_passwordError:false,
            emailError:false,
        });
        if (this.state.name.length === 0) {
            this.showError("Debe introducir un nombre", "nameError");
            return false;
        }

        if (this.state.password.length === 0) {
            this.showError("Debe elegir una contraseña", "passwordError");
            return false;
        }

        if (this.state.confirm_password.length === 0) {
            this.showError("Debe confirmar la contraseña", "confirm_passwordError");
            return false;
        }

        if (this.state.password !== this.state.confirm_password) {
            this.showError("Contraseñas no coinciden", "passwordError");
            this.showError("Contraseñas no coinciden", "confirm_passwordError");
            return false;
        }

        if (this.state.email.length === 0) {
            this.showError("Debe poner una direccion de e-mail", "emailError");
            return false;
        }

        if (!validateEmail(this.state.email)) {
            this.showError("Email invalido", "emailError");
            return false;
        }

        if (this.state.phone.length < 3) {
            this.showError("Número de telefono invalido", "");
            return false;
        }

        this.props.onFinish({
            name : this.state.name,
            password : this.state.password,
            email : this.state.email,
            phone : this.state.phone
        });
        return true;
    }

    render() {
        return (
            <View style={styles.singupForm}>
                <Text style={{alignItems:'center',alignSelf:'center',color:'red',fontSize: 12}}>
                    { this.state.message_error !== "" ? <Icon style={{color: 'red',fontSize:15}} name="md-alert"/> : null }{"  " + this.state.message_error}</Text>
                <Item error={this.state.nameError}>
                    <Input
                        style={styles.textInput}
                        //autoFocus = {true}
                        error={true}
                        value={this.state.name}
                        ref={(input) => this._name = input}
                        autoCapitalize='words'
                        onChangeText={(text) => this.setState({name:text})}
                        onSubmitEditing={(e) => {
                            this._password._root.focus();
                        }}
                        placeholder="Nombre y apellido" />
                </Item>
                <Item error={this.state.passwordError}>
                    <Input
                        style={styles.textInput}
                        value={this.state.password}
                        placeholder="Contraseña"
                        onChangeText={(text) => this.setState({password:text})}
                        ref={(input) => this._password = input}
                        onSubmitEditing={(e) => {
                            this._confirm_password._root.focus();
                        }}
                        password={true}
                        secureTextEntry={true} />
                </Item>
                <Item error={this.state.confirm_passwordError}>
                    <Input
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({confirm_password:text})}
                        placeholder="Repita la contraseña"
                        password={true}
                        ref={(input) => this._confirm_password = input}
                        onSubmitEditing={(e) => {
                            this._email._root.focus();
                        }}
                        secureTextEntry={true} />
                </Item>
                <Item error={this.state.emailError}>
                    <Input
                        style={styles.textInput}
                        placeholder="Email"
                        value={this.state.email}
                        ref={(input) => this._email = input}
                        autoCapitalize='none'
                        onChangeText={(text) => this.setState({email:text})}
                        onSubmitEditing={(e) => {
                            this.refs.phone.focus();
                        }}
                        keyboardType='email-address'/>
                </Item>

                <PhoneInput
                    cancelText={"Cancelar"}
                    confirmText={"Confirmar"}
                    initialCountry="ar"
                    flagStyle={{width:50, height: 35}}
                    textStyle={{fontSize: 20, borderBottomColor: color.secondary.dark}}
                    style={{marginTop : 25, paddingHorizontal: 5}}
                    ref='phone'
                    onChangePhoneNumber={(phone) => this.setState({phone:phone})}
                    textProps={{placeholder:"Número de telefono", value:"+54 " + this.state.phone}}
                />

                <Button full style={{backgroundColor: color.secondary.dark, marginTop:60}} onPress={() => this.confirm() }>
                    <Text style={{fontSize: 20, color: color.secondary.text}}>CONFIRMAR</Text>
                </Button>
            </View>
        );
    }
}

class SignUpAdvanceLawyerInformation extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            selectedSpecialties : [],
            collapsed :     true,
            showSummary :   false,

            location:       "",
            university:     "",
            experience:     "",
            fee:            "",
            description:    ""
        }
    }

    selectSpecialty(e) {
        let specialties = this.state.selectedSpecialties.slice();
        let index = specialties.indexOf(e);
        if (index !== -1) {
            specialties.splice(index,1);
        } else {
            specialties.push(e);
        }
        this.setState({
            selectedSpecialties : specialties
        })
    }

    openSpecialties() {
        let newCollapsedState = !this.state.collapsed;
        this.setState({
            collapsed : newCollapsedState
        });
    }

    collapseSpecialities() {
        if (!this.state.collapsed) {
            this.openSpecialties();
        }
    }

    isSelected(e) {
        return this.state.selectedSpecialties.indexOf(e) !== -1;
    }

    specialtySummary() {
        let specialities = this.state.selectedSpecialties;
        if (specialities.length > 0) {
            return "Especialidad (" + specialities.length + ")";
        }
        return "Especialidad";
    }

    doContinue() {
        if (!this.state.showSummary) {
            this.setState({showSummary:true});
        } else {
            this.props.onFinish({
                specialties :   this.state.selectedSpecialties,
                location :      this.state.location,
                university :    this.state.university,
                fee :           this.state.fee,
                experience :    this.state.experience,
                description :   this.state.description
            })
        }
    }

    renderShortInfoForm() {
        let ListItems = UsersMock.LAWYER_SPECIALTIES.map((e) => (
            <ListItem key={e} >
                <CheckBox color={color.secondary.light} checked={this.isSelected(e)} onPress={() => this.selectSpecialty(e)} />
                <Text>  {e}</Text>
            </ListItem>
        ));
        return (
            <View style={styles.singupForm}>
                <Button full light iconRight onPress={() => this.openSpecialties()}>
                    <Text style={{color:color.secondary.dark,fontSize:20}}>{this.specialtySummary()}</Text>
                </Button>
                <Collapsible collapsed={this.state.collapsed}>
                    <List style={{alignSelf: 'stretch',paddingRight:20}}>
                        {ListItems}
                    </List>
                </Collapsible>
                <Item style={{marginTop:20}}>
                    <Input
                        onChangeText={(y) => this.setState({experience:y})}
                        onFocus={()=>this.collapseSpecialities()}
                        keyboardType="numeric"
                        placeholder='Años de experiencia'
                    />
                </Item>
                <Item style={{marginTop:20}}>
                    <Input
                        onChangeText={(f) => this.setState({fee:f})}
                        onFocus={()=>this.collapseSpecialities()}
                        keyboardType="numeric"
                        placeholder='Honorarios (precio por consulta)'
                    />
                </Item>
                <Item style={{marginTop:20}}>
                    <Input
                        onChangeText={(u) => this.setState({university:u})}
                        onFocus={()=>this.collapseSpecialities()}
                        placeholder='Universidad'
                    />
                </Item>
                <Item style={{marginTop:20, marginBottom: 30}}>
                    <Input
                        onChangeText={(l) => this.setState({location:l})}
                        onFocus={()=>this.collapseSpecialities()}
                        placeholder='Ubicación'
                    />
                </Item>

                <Button style={{backgroundColor:color.secondary.dark}} full onPress={() => this.doContinue()}>
                    <Text style={{color:color.secondary.text,fontSize:20}}>CONTINUAR</Text>
                </Button>
            </View>
        );
    }

    renderSummaryForm() {
        return (
            <View style={styles.singupForm}>
                <Text style={{fontSize:25}}>Escribe un resumen sobre ti.</Text>
                <Item regular style={{height:300, alignSelf: 'flex-start'}}>
                    <Input
                        onChangeText={(t) => this.setState({description:t})}
                        style={{alignSelf: 'flex-start'}}
                        multiline={true}
                        editable={true}
                        placeholder='Resumen' />
                </Item>
                <Text style={{fontSize:10}}>El campo es opcional.</Text>
                <Button style={{backgroundColor:color.secondary.dark, marginTop: 40}} full onPress={() => this.doContinue()}>
                    <Text style={{color:color.secondary.text,fontSize:20}}>FINALIZAR</Text>
                </Button>
            </View>
        );
    }

    render() {
        return (this.state.showSummary) ? this.renderSummaryForm() : this.renderShortInfoForm();
    }
}

export class Singup extends Component<{}>{
    constructor(props) {
        super(props);
        this.state = {
            userType : SingUp_UserType.UNDEFINED,
            basicInformation : {},
            passBasicInformation : false,
            advanceLawyerInformation : {},
            passAdvanceLawyerInformation : false,
            openingSession : false
        };
    }

    setUserType = (type) => {
        this.setState({userType : type});
    };

    goToValidation = (basicInformation) => {
        this.setState({
            passBasicInformation : true,
            basicInformation : basicInformation,
        });
    };

    addLawyerInfo(advanceInformation) {
        this.setState({
            advanceLawyerInformation : advanceInformation,
            passAdvanceLawyerInformation : true
        });
    }

    finishAndLogin() {
        let userInfo = {
            ...this.state.basicInformation,
            user_type : this.state.userType,
            lawyer_info : this.state.advanceLawyerInformation
        };
        let user = UsersMock.add(userInfo);
        let theThis = this;
        setTimeout(() => {
            if (UsersMock.createSession(user.email, user.password)) {
                theThis.setState({openingSession:true});
                let {onLogin} = theThis.props.screenProps;
                setTimeout(function () {
                    onLogin(user.user_type);
                },1000);
            }
        },1000);
    }

    actualForm() {
        if (this.state.userType !== SingUp_UserType.UNDEFINED) {
           if (!this.state.passBasicInformation) {
               return <SingupBasicInformation onFinish={(bi) => this.goToValidation(bi)}/>
           }
           if (this.state.userType === SingUp_UserType.LAWYER && !this.state.passAdvanceLawyerInformation) {
               return <SignUpAdvanceLawyerInformation onFinish={(li) => this.addLawyerInfo(li)}/>
           }
           return <SignUpWaitConfirmationCode onSuccess={() => this.finishAndLogin()}/>
        }
        return <SingupSelectUserType onSelectUserType={(t) => this.setUserType(t)}/>
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
            <KeyboardAwareScrollView
                extraHeight={20}
                style={{backgroundColor: '#FFFFFF'}}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Button
                    transparent
                    title="Inicio"
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Icon name="ios-arrow-back" style={{color :color.secondary.color}} />
                </Button>

                <Text style={{fontSize:40,fontWeight:'bold'}}>Loyer</Text><Text style={{fontSize:40}}>Registración</Text>

                { this.actualForm() }

            </KeyboardAwareScrollView>
        )
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
        height: 55,
        fontSize: 20
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