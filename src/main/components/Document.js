import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {Body, Button, Container, Content, H1, Header, Icon, Left, Right, Text, Title, View} from "native-base";
import {color} from "../global/Color"

export default class Document extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document: props.navigation.state.params.document
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
                    <Title>{this.state.document.title}</Title>
                    </Body>
                </Header>
                <Content style={styles.container}>
                    <View style={styles.header}>
                        <H1 style={styles.title}>{this.state.document.title}</H1>
                        <View style={styles.infoRow}>
                            <Text style={styles.date}>{this.state.document.date}</Text>
                            <Text style={styles.ownerInfo}>de {this.state.document.owner}</Text>
                        </View>
                    </View>
                    <Text style={styles.body}>{this.state.document.content}</Text>
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
    header: {
        marginVertical: 12
    },
    title: {
        color: color.primary.dark
    },
    infoRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch'
    },
    date: {
        color: color.secondary.light,
        fontSize: 10
    },
    ownerInfo: {
        color: color.primary.light,
        fontSize: 10
    },
    body: {
        color: color.secondary.dark
    }
});