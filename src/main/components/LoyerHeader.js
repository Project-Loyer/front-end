import React, { Component } from 'react';
import { Header, Title, Content,Button , Icon, Left, Body, Right,Thumbnail} from 'native-base';

export class LoyerHeader extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.title ? this.props.title : "Loyer"}</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => Alert.alert("Perfil de Usuario")}>
                        <Thumbnail small source={{uri: 'http://necocheahoy.com/wp-content/uploads/2017/05/1-104.jpg'}}/>
                    </Button>
                    <Button
                        transparent
                        onPress={() => Alert.alert("Notificaciones!")}>
                        <Icon name="notifications"/>
                    </Button>
                </Right>
            </Header>
        );
    }
}
