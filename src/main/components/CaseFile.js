import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";

export default class CaseFile extends Component {
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
                    <Title>Expediente {this.props.navigation.state.params.file.id}</Title>
                    </Body>
                </Header>
                <Content>
                    <List
                        dataArray={this.props.navigation.state.params.file.documents}
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
            </Container>
        );
    }
}