import React, { Component } from 'react';
import { Container, Content, Item, List, ListItem, Left, Right, Body, Icon, Text, Input, Thumbnail, Label, Button } from 'native-base';

import { LoyerHeader } from "./LoyerHeader";

import UsersMock from "../mock/Users";

export class LawyerSearchProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lawyer: props.navigation.state.params.lawyer
        }
    }

    render() {
        return <Container><Text>{this.state.lawyer.name}</Text></Container>
    }
}