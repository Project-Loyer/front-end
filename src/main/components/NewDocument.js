import React, { Component } from 'react';
import {StyleSheet} from "react-native";
import {
    Body, Button, Container, Content, Form, Header, Icon, Input, Item, Label, Left, Right, Switch, Text, Title, View
} from "native-base";
import Moment from 'moment';
import FileMock from "../mock/Files";
import {LoyerHeader} from "./LoyerHeader";

export default class NewDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document: {
                title: 'Nuevo documento',
                content: '',
                date: 'Justo ahora',
                owner: 'Burlando',
                caseFile: props.navigation.state.params.caseFile.id,
            },
            shared: true
        };
    }


    saveDocument() {
        let date = Moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        FileMock.addDocument({...this.state.document,date:date});
        this.props.navigation.navigate("CaseFile", {file: FileMock.getCaseFile(this.state.document.caseFile)});
    }

    render() {
        let navigationParams = this.props.navigation.state.params;
        let goBackAction = (navigationParams && navigationParams.goBack) ? navigationParams.goBack : null;
        return (
            <Container>
                <LoyerHeader goBack={goBackAction} title={"Nuevo documento"} />
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
                    <View style={styles.sharedRow}>
                        <Label>Compartido</Label>
                        <Switch
                            onValueChange={(value) => this.setState({shared: value})}
                            value={this.state.shared} />
                    </View>
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
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    titleInput: {
        marginBottom: 12
    },
    sharedRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 12
    },
    submitButton: {
        marginVertical: 24
    }
});