import React, { Component } from 'react';
import { Container, Content, Item, List, ListItem, Left, Right, Body, Icon, Text, Input, Thumbnail, Label, Button } from 'native-base';

import { LoyerHeader } from "./LoyerHeader";

import UsersMock from "../mock/Users";

export class ClientHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    handleClick = (lawyer) => {

    }

    filterLawyers = (lawyer) => {
        return  this.state.filter === '' ||
                lawyer.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1 ||
                lawyer.lawyer_info.specialties.findIndex((specialty) => { return specialty.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1 }) > -1;
    }

    render() {
        let lawyers = UsersMock.getLawyers().filter(this.filterLawyers).map(lawyer => {
            return (
                <ListItem   avatar 
                            button={true}
                            onPress={() => this.props.navigation.navigate('LawyerSearchProfile', { lawyer: lawyer })}
                            key={lawyer.name} >
                    <Left style={{ flex: 1 }}>
                        <Thumbnail source={{ uri: lawyer.lawyer_info.picture }} />
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Text>{lawyer.name}</Text>
                        <Text note>
                            {lawyer.lawyer_info.description}
                        </Text>
                    </Body>
                    <Right style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text node>$ {lawyer.lawyer_info.fee}</Text>
                        <Icon name="md-arrow-forward" />
                    </Right>
                </ListItem>
            )
        });

        return (
            <Container>
                <LoyerHeader {...this.props} />
                <Content>
                    <Item stackedLabel>
                        <Input placeholder="Inserte nombre o especialidad..." placeholderTextColor="#BAB9B8" onChangeText={(text) => this.setState({ filter: text })}/>
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