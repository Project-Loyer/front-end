import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";

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
            </Container>
        );
    }
}