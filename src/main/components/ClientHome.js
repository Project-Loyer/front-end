import React, { Component } from 'react';
import { Container, Content, Item, List, ListItem, Left, Right, Body, Icon, Text, Input, Thumbnail, Label } from 'native-base';

import { LoyerHeader } from "./LoyerHeader";

import UsersMock from "../mock/Users";

export class ClientHome extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let lawyers = UsersMock.getLawyers().map(lawyer => {
            return (
                <ListItem avatar key={lawyer.name}>
                    <Left>
                        <Thumbnail source={{ uri: lawyer.lawyer_info.picture }} />
                    </Left>
                    <Body>
                        <Text>{lawyer.name}</Text>
                        <Text note>
                            {lawyer.lawyer_info.description}
                        </Text>
                    </Body>
                    <Right>
                        <Text node>$ {lawyer.lawyer_info.fee}</Text>
                    </Right>
                </ListItem>
            )
        });

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