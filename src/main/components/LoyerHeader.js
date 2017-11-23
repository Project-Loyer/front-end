import React, { Component } from 'react';
import { Text, Container, Header, Title, Content,Button , Icon, Left, Body, Right,Thumbnail} from 'native-base';
import {PushNotificator} from "../util/PushNotificator";
import NotificationsHandler from '../global/NotificationsHandler.js';
import { StyleSheet } from "react-native";
import IconBadge from 'react-native-icon-badge';
import renderIf from "../util/renderIf";
import {Alert} from "react-native";

export class LoyerHeader extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            notifications: NotificationsHandler.countNewNotifications()
        };

        this.interval = setInterval(()=>{
            this.setState({notifications:NotificationsHandler.countNewNotifications()})
        },100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let leftAction = this.props.goBack ? (typeof this.props.goBack === 'function' ? this.props.goBack : this.props.navigation.goBack) : () => {this.props.navigation.navigate("DrawerOpen")};
        return (
                <Header style={this.props.noElevation ? {elevation:0} : {}}>
                    <PushNotificator />
                    <Left>
                        <Button
                            transparent
                            onPress={() => leftAction()}>
                            <Icon name={this.props.goBack ? "md-arrow-back" : "menu"}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{textAlign: "center",width:"100%",marginLeft:33}}>{this.props.title ? this.props.title : "Loyer"}</Title>
                    </Body>
                    {renderIf(this.props.goBack)(
                        <Right/>
                    )}
                    {renderIf(!this.props.goBack)(
                        <Right>
                            <Button
                                transparent
                                onPress={() => Alert.alert("Perfil de Usuario")}>
                                <Thumbnail small source={{uri: 'http://necocheahoy.com/wp-content/uploads/2017/05/1-104.jpg'}}/>
                            </Button>
                            <IconBadge
                                MainElement={
                                    <Button
                                        transparent
                                        onPress={() => this.props.navigation.navigate("Notifications")}>
                                        <Icon name="notifications" />
                                    </Button>
                                }
                                BadgeElement={
                                    <Text style={styles.notificationsBadgeNumber}>{this.state.notifications}</Text>
                                }
                                IconBadgeStyle={styles.notificationsBadge}
                                Hidden={this.state.notifications === 0}
                            />
                        </Right>
                    )}
                </Header>
        );
    }
}

const styles = StyleSheet.create({
    notificationsBadge: {
        width: 15,
        height: 15,
        minWidth: 15,
        top: 5
    },
    notificationsBadgeNumber: {
        color: '#FFFFFF',
        fontSize: 10
    }
});
