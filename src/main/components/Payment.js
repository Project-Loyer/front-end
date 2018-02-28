import React, { Component } from 'react';
import {Button, Container, Content, Form, Icon, Input, Item, Label, Text} from "native-base";
import { StyleSheet } from 'react-native';
import {color} from "../global/Color"
import {LoyerHeader} from "./LoyerHeader";


export class Payment extends Component<{}>{
    constructor(props) {
        super(props);
        this.state = {
            nextComponent: props.navigation.state.params.nextComponent,
            nextComponentData: props.navigation.state.params.nextComponentData
        };
    }

    submit() {
        this.props.navigation.navigate(this.state.nextComponent);
    }

    render(){
        return (
            <Container>
                <LoyerHeader {...this.props} title={"Pago"} noElevation/>
                <Content style={styles.container}>
                    <Form>
                        <Item floatingLabel style={styles.cardNumberItem}>
                            <Icon active name="md-card"/>
                            <Label>Número de tarjeta</Label>
                            <Input />
                        </Item>
                        <View style={styles.thruAndCVVRow}>
                            <Item floatingLabel style={styles.thruItem}>
                                <Label>MM</Label>
                                <Input />
                            </Item>
                            <Text>/</Text>
                            <Item floatingLabel style={styles.thruItem}>
                                <Label>AA</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last style={styles.cvvItem}>
                                <Label>CVV</Label>
                                <Input />
                            </Item>
                        </View>
                    </Form>
                    <Button block
                            style={styles.submitButton}
                            onPress={() => this.submit()}>
                        <Text>Confirmar</Text>
                    </Button>
                </Content>
            </Container>
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
    cardNumberItem: {
        marginBottom: 12
    },
    thruAndCVVRow: {
        flexDirection: 'horizontal',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    thruItem: {
        flex: 0.25
    },
    cvvItem: {
        flex: 0.5
    },
    submitButton: {
        marginVertical: 24
    }
});