import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {color} from "../global/Color";
import ActionButton from "react-native-action-button";

export default class CaseFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: props.navigation.state.params.file
        };
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
                    <Title>Expediente {this.state.file.id}</Title>
                    </Body>
                </Header>
                <Content>
                    <List
                        dataArray={this.state.file.documents}
                        renderRow={(doc) =>
                            <ListItem
                                button onPress={() => this.props.navigation.navigate('Document', {document: doc})}>
                                <Left>
                                    <Text>{doc.title}</Text>
                                </Left>
                                <Right>
                                    <Icon name="ios-arrow-forward" />
                                </Right>
                            </ListItem>
                        }>
                    </List>
                </Content>
                <ActionButton buttonColor={color.primary.light}>
                    <ActionButton.Item
                        buttonColor={color.primary.color}
                        title="Subir documento"
                        onPress={() => this.props.navigation.navigate('NewDocument', {caseFile: this.state.file.id})}>
                        <Icon name="cloud-upload" style={styles.fabIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    fabIcon: {
        fontSize: 22,
        height: 22,
        color: 'white'
    }
});