import React, { Component } from 'react';
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import { Container, Content, Item, List, ListItem, Left, Right, Body, Icon, Text, Input, Thumbnail, Label } from 'native-base';

import { LoyerHeader } from "./LoyerHeader";

import FilesMock from '../mock/Files'

export class ClientHome extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let lawyers = FilesMock.users.filter((user) => { return user.userType === 'lawyer' }).map(lawyer => {
            return (
                <ListItem avatar key={lawyer.user}>
                    <Left>
                        <Thumbnail source={{ uri: lawyer.picture }} />
                    </Left>
                    <Body>
                        <Text>{lawyer.name} {lawyer.lastName}</Text>
                        <Text note>
                            {lawyer.description}
                        </Text>
                    </Body>
                    <Right>
                        <Text node>$ {lawyer.fee}</Text>
                    </Right>
                </ListItem>
            )
        })

        return (
            <Container>
                <LoyerHeader {...this.props} />
                <Content>
                    <Item stackedLabel>
                        <Label>inserte nombre o especialidad</Label>
                        <Input />
                    </Item>
                    <List>
                        {
                            lawyers
                        }
                    </List>
                </Content>
            </Container>            
        )
    }
}