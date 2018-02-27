import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {Body, Button, Container, Content, H1, Header, Icon, Left, Right, Text, Title, View} from "native-base";
import {color} from "../global/Color"
import {LoyerHeader} from "./LoyerHeader";

export class Document extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document: props.navigation.state.params.document
        };
    }

    render() {
        let navigation_props = this.props.navigation.state.params;
        let headerGoBack = (typeof navigation_props.headerGoBack === 'function') ? navigation_props.headerGoBack : () => this.props.navigation.navigate("Documents");
        return (
            <Container>
                <LoyerHeader goBack={headerGoBack} {...this.props} title={this.state.document.title} />
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