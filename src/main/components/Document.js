import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";

export default class Document extends Component {
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
                    <Title>{this.props.navigation.state.params.document.title}</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>{this.props.navigation.state.params.document.title}</Text>
                </Content>
            </Container>
        );
    }
}