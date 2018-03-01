import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Title, Text, Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Separator, Button, Thumbnail } from 'native-base';
import { color } from '../global/Color.js';
import NotificationsHandler from '../global/NotificationsHandler.js';
import {LoyerHeader} from "./LoyerHeader";
import {PushNotificator} from "../util/PushNotificator"

export class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        NotificationsHandler.markAsRead();
    }

    render() {
        let types = [...new Set(NotificationsHandler.notifications.map(notif => notif.type))];
        let rows = [];
        for (let i = 0; i < types.length; i++) {
            rows.push(
                <Separator key={"LIH" + i} bordered>
                    <Text key={"LIHT" + i} style={styles.listHeader}>{types[i]}</Text>
                </Separator>
            );
            let notificationsOfType = NotificationsHandler.notifications.filter(notif => notif.type === types[i]).sort((a, b) => a.date - b.date);
            for (let j = 0; j < notificationsOfType.length; j++) {
                if (notificationsOfType[j].type === 'Mensaje de Cliente'){
                    rows.push(
                        <ListItem avatar key={"LI" + (i * 10 + j)} style={styles.listItem}>
                            <Left>
                                <Thumbnail key={"LII" + (i * 10 + j)} source={notificationsOfType[j].avatar}/>
                            </Left>
                            <Body key={"LIB" + (i * 10 + j)}>
                                <Text>{notificationsOfType[j].title}</Text>
                                <Text note key={"LIBT" + (i * 10 + j)}>{notificationsOfType[j].body}</Text>
                            </Body>
                            <Right>
                                <Text note style={styles.listTime}>{notificationsOfType[j].time}</Text>
                            </Right>
                        </ListItem>
                    );
                } else if (notificationsOfType[j].type === "Calendario") {
                    rows.push(
                        <ListItem avatar key={"LI" + (i * 10 + j)} style={styles.listItem}>
                            <Left>
                                <Icon key={"LII" + (i * 10 + j)} name={notificationsOfType[j].icon} color={notificationsOfType[j].colorIcon} style={styles.listIcon}/>
                            </Left>
                            <Body key={"LIB" + (i * 10 + j)}>
                                <Text>{notificationsOfType[j].title}</Text>
                                <Text note key={"LIBT" + (i * 10 + j)}>{notificationsOfType[j].body}</Text>
                            </Body>
                            <Right>
                                <Text note style={styles.listTime}>{notificationsOfType[j].time}</Text>
                            </Right>
                        </ListItem>
                    );
                } else {
                    rows.push(
                        <ListItem avatar key={"LI" + (i * 10 + j)} style={styles.listItem}>
                            <Left>
                                <Icon key={"LII" + (i * 10 + j)} name={notificationsOfType[j].icon} color={notificationsOfType[j].colorIcon} style={styles.listIcon}/>
                            </Left>
                            <Body key={"LIB" + (i * 10 + j)}>
                                <Text>{notificationsOfType[j].title}</Text>
                                <Text note key={"LIBT" + (i * 10 + j)}>{notificationsOfType[j].body}</Text>
                            </Body>
                            <Right>
                                <Text note style={styles.listTime}>{notificationsOfType[j].time}</Text>
                            </Right>
                        </ListItem>
                    );
                }
            }
        }
        return (
            <Container>
                <LoyerHeader title={"Notificaciones"} goBack {...this.props}/>
                <Content>
                    <List>
                        {rows}
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 0,
        marginBottom: 0,
        width:"100%",
        marginLeft:0,
        padding:2
    },
    listItemText: {
        color: 'grey',
        fontSize: 12
    },
    listItemBody: {
        borderWidth: 0,
        borderBottomWidth: 0
    },
    listIcon: {
        fontSize: 50,
        paddingLeft: 10,
        width: 53,
        color:"#FF000F"
    },
    listHeader: {
        fontSize: 15,
        color: color.secondary.dark
    },
    listTime :{
      width: 50,
      marginRight: -10
    }
});
