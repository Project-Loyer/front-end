import React, { Component } from 'react';
import {Button, Container, Content, Form, H1, H3, Icon, Input, Item, Label, Spinner, Text, View, Header} from "native-base";
import { StyleSheet } from 'react-native';
import {LoyerHeader} from "./LoyerHeader";
import {color} from "../global/Color";

const PaymentStatus = {
    UNDEFINED: 0,
    LOADING: 1,
    OK: 2,
    ERROR: 3
};

export class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentStatus: PaymentStatus.UNDEFINED,
            openingSession: false
        };
    }

    componentWillMount() {
        this.props = {
            ...this.props,
            ...this.props.navigation.state.params
        }
    }

    submitPayment() {
        this.setState({
            paymentStatus: PaymentStatus.LOADING
        });
        setTimeout(() => {
            this.setState({ paymentStatus: PaymentStatus.OK });
        }, 3000);
    }

    continue() {
        if (typeof this.props.onSuccess === 'function') {
            this.props.onSuccess();
            return;
        }
        let {onLogin} = this.props.screenProps;
        this.setState({openingSession:true});
        let theThis = this;
        setTimeout(() => {
            let {onLogin} = theThis.props.screenProps;
            onLogin(theThis.props.user_type);
        },1000);
    }

    goBack() {
        this.setState({
            paymentStatus: PaymentStatus.UNDEFINED
        });
    }

    render(){
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

        if (this.state.paymentStatus === PaymentStatus.UNDEFINED) {
            return (
                <Container>
                    <Header />
                    <Content style={styles.container}>
                        <Form>
                            <H1>Ingresá los datos de tu tarjeta</H1>
                            <Item floatingLabel style={styles.cardNumberItem}>
                                <Label>Número de tarjeta</Label>
                                <Input keyboardType="numeric"
                                       maxLength={16}/>
                                <Icon name='md-card'/>
                            </Item>
                            <View style={styles.thruAndCVVRow}>
                                <View style={styles.thruContainer}>
                                    <Text>Fecha de expiración</Text>
                                    <View style={styles.monthAndYear}>
                                        <Item style={styles.thruItem}>
                                            <Input placeholder="MM"
                                                   keyboardType="numeric"
                                                   maxLength={2}/>
                                        </Item>
                                        <Text>/</Text>
                                        <Item style={styles.thruItem}>
                                            <Input placeholder="AA"
                                                   keyboardType="numeric"
                                                   maxLength={2}/>
                                        </Item>
                                    </View>
                                </View>
                                <Item floatingLabel last style={styles.cvvItem}>
                                    <Label>CVV</Label>
                                    <Input keyboardType="numeric"
                                           maxLength={4}/>
                                </Item>
                            </View>
                        </Form>
                        <Button block
                                style={styles.submitButton}
                                onPress={() => this.submitPayment()}>
                            <Text>Confirmar</Text>
                        </Button>
                    </Content>
                </Container>
            );
        } else if (this.state.paymentStatus === PaymentStatus.LOADING) {
            return (
                <Container>
                    <Content marginTop="50%">
                        <Spinner color={color.primary.dark} />
                        <Text style={{alignSelf:"center"}}>Generando pago...</Text>
                    </Content>
                </Container>
            );
        } else if (this.state.paymentStatus === PaymentStatus.OK) {
            return (
                <Container style={{backgroundColor: color.general.successContainer}}>
                    <Content marginTop="50%">
                        <Icon active name="md-done-all" style={{alignSelf:"center", fontSize:48}} />
                        <H3 style={{alignSelf:"center", marginVertical:12}}>¡PAGO REALIZADO CON ÉXITO!</H3>
                        <Button block
                                style={styles.continueButton}
                                onPress={() => this.continue()}>
                            <Text>Continuar</Text>
                        </Button>
                    </Content>
                </Container>
            );
        } else {
            return (
                <Container style={{backgroundColor: color.general.errorContainer}}>
                    <Content marginTop="50%">
                        <Icon active name="md-warning" style={{alignSelf:"center", fontSize:48}} />
                        <H3 style={{alignSelf:"center", marginVertical:12}}>¡FALLÓ EL PAGO!</H3>
                        <Button block
                                style={styles.goBackButton}
                                onPress={() => this.goBack()}>
                            <Text>Volver</Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        paddingHorizontal: 24
    },
    cardNumberItem: {
        marginBottom: 12,
    },
    thruAndCVVRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    monthAndYear: {
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    thruItem: {
        flex: 1
    },
    cvvItem: {
        flex: 0.5,
        marginLeft: 64
    },
    submitButton: {
        marginVertical: 24
    },
    continueButton: {
        marginVertical: 24,
        marginHorizontal: 48,
        backgroundColor: color.primary.color
    },
    goBackButton: {
        marginVertical: 24,
        marginHorizontal: 48,
        backgroundColor: color.primary.color
    }
});