import React, { Component } from 'react';
import { Container, Content, Item, List, ListItem, Left, Right, Body, Icon, Text, Input, Thumbnail, Label } from 'native-base';

import { LoyerHeader } from "./LoyerHeader";
import {color} from "../global/Color";
import UsersMock from "../mock/Users";

export class ClientHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : "",
        };
    }
    render() {
        let keyword = this.state.keyword;
        let lawyers = UsersMock.getLawyers(keyword.length > 2 ? keyword : null).map(lawyer => {
            return (
                <ListItem avatar key={lawyer.name} style={{alignSelf: 'stretch'}}>
                    <Left>
                        <Thumbnail source={{ uri: lawyer.lawyer_info.picture }} />
                    </Left>
                    <Body>
                        <Text>{lawyer.name}</Text>
                        {lawyer.lawyer_info.specialties.length > 0 ? <Text style={{color:color.secondary.light,fontSize: 10}}>{lawyer.lawyer_info.specialties.join(", ")}</Text> : null}
                        <Text note style={{marginTop:10}}>
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
                    <Item stackedLabel iconLeft>
                        <Label>Inserte nombre o especialidad</Label>
                        <Input onChangeText={(text) => this.setState({keyword : text})}/>
                        <Icon name='md-search'/>
                    </Item>
                    <List style={{alignSelf: 'stretch'}}>
                        {
                            lawyers
                        }
                    </List>
                </Content>
            </Container>            
        )
    }
}