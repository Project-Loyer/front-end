import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {Alert} from 'react-native';

export default class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentDocuments: [
                {
                    title: 'APELACION Pierri',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    date: '2017-10-02 18:31:02',
                    owner: 'Burlando',
                    caseFile: '011093/2017'
                },
                {
                    title: 'DEMANDA Isidoro Gomez',
                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    date: '2017-08-28 10:11:54',
                    owner: 'Sandoval',
                    caseFile: '010842/2017'
                }
            ],
            caseFiles: [
                {
                    id: '011093/2017',
                    documents: [
                        {
                            title: 'APELACION Pierri',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            date: '2017-10-02 18:31:02',
                            owner: 'Burlando',
                            caseFile: '011093/2017'
                        }
                    ]
                },
                {
                    id: '010842/2017',
                    documents: [
                        {
                            title: 'DEMANDA Isidoro Gomez',
                            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                            date: '2017-08-28 10:11:54',
                            owner: 'Sandoval',
                            caseFile: '010842/2017'
                        }
                    ]
                },
                {
                    id: '000012/2016',
                    documents: [
                        {
                            title: 'CARTA DOCUMENTO 2',
                            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                            date: '2016-03-02 10:42:20',
                            owner: 'Burlando',
                            caseFile: '000012/2016'
                        },
                        {
                            title: 'CARTA DOCUMENTO 1',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            date: '2016-02-28 10:22:22',
                            owner: 'Burlando',
                            caseFile: '000012/2016'
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Documentos</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => Alert.alert("Perfil de Usuario")}>
                            <Icon name="person" />
                        </Button>
                        <Button
                            transparent
                            onPress={() => Alert.alert("Notificaciones!")}>
                            <Icon name="notifications" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <ListItem itemHeader first>
                        <Text>RECIENTES</Text>
                    </ListItem>
                    <List
                        dataArray={this.state.recentDocuments}
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
                    <ListItem itemHeader>
                        <Text>EXPEDIENTES</Text>
                    </ListItem>
                    <List
                        dataArray={this.state.caseFiles}
                        renderRow={(file) =>
                            <ListItem
                                button onPress={() => this.props.navigation.navigate('CaseFile', {file: file})}>
                                <Left>
                                    <Text>{file.id}</Text>
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