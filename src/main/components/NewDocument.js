import React, { Component } from 'react';
import { Alert, StyleSheet } from "react-native";
import {
    Body, Button, Container, Content, Form, Header, Icon, Input, Item, Label, Left, Right, Text, Title
} from "native-base";
import Moment from 'moment';

export default class NewDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document: {
                title: 'Nuevo documento',
                content: '',
                date: 'Justo ahora',
                owner: 'Burlando',
                caseFile: props.navigation.state.params.caseFile
            }
        };
    }

    saveDocument() {
        let date = Moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        this.setState(
            {document: {...this.state.document, "date" : date } },
            () => this.props.navigation.navigate("Documents", {newDoc: this.state.document})
        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Documents")}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Nuevo documento</Title>
                    </Body>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item floatingLabel style={styles.titleInput}>
                            <Label>Título</Label>
                            <Input onChangeText={(title) => this.setState({document: {...this.state.document, "title" : title } })} />
                        </Item>
                        <Item regular last>
                            <Input multiline={true}
                                   autoCapitalize={'sentences'}
                                   maxHeight={320}
                                   autoGrow={true}
                                   placeholder='Contenido'
                                   onChangeText={(content) => this.setState({document: {...this.state.document, "content" : content } })} />
                        </Item>
                    </Form>
                    <Button block
                            style={styles.submitButton}
                            onPress={() => this.saveDocument()}>
                        <Text>Guardar</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    titleInput: {
        marginBottom: 12
    },
    submitButton: {
        marginVertical: 24
    }
});