import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container, Header, Content, List, ListItem, Icon, Left, Body, Separator } from 'native-base';
import { color } from '../global/Color.js';
import NotificationsHandler from '../global/NotificationsHandler.js';

export default class Notifications extends Component {
    constructor(props) {
        super(props);

        setTimeout(()=>{
            NotificationsHandler.markAsRead();
        },2000);
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
                rows.push(
                    <ListItem icon key={"LI" + (i*10 + j)} style={styles.listItem}>
                        <Left key={"LIL" + (i*10 + j)}>
                            <Icon key={"LII" + (i*10 + j)} name={notificationsOfType[j].type === 'Mensaje de Cliente' ? 'text' : 'alarm'} />
                        </Left>
                        <Body key={"LIB" + (i*10 + j)} style={styles.listItemBody}>
                            <Text key={"LIBT" + (i*10 + j)} style={styles.listItemText}>{notificationsOfType[j].body}</Text>
                        </Body>
                    </ListItem>
                );
            }
        }
        return (
            <Container>
                <Header />
                <Content>
                    {rows}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 10,
        marginBottom: 10
    },
    listItemText: {
        color: 'grey',
        fontSize: 12
    },
    listItemBody: {
        borderWidth: 0,
        borderBottomWidth: 0
    },
    listHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.secondary.dark
    }
});
