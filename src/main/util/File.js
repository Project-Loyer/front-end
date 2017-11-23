import React, { Component } from 'react';
import {Tabs, Badge, Tab, TabHeading, Item, Label,Input, Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import renderIf from "../util/renderIf";
import Color from "react-native-material-color";

export class FileList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let filesArray = this.props.filesArray ? this.props.filesArray : [];
        let onPressAction = typeof this.props.onPressAction === "function" ? this.props.onPressAction : (file) => {};
        let fileProps = {
            title : "title",
            ...this.props.fileProps
        };
        return (
            <Content>
                {renderIf(this.props.firstItem)(
                    <ListItem itemHeader first>
                        <Text>{this.props.firstItem}</Text>
                    </ListItem>
                )}
                <List
                    dataArray={filesArray}
                    //() => this.props.navigation.navigate('Document', {document: doc})
                    renderRow={(file) =>
                        <ListItem button onPress={()=>onPressAction(file)}>
                            <Left>
                                <Text>
                                    {file[fileProps.title]}
                                </Text>
                                {renderIf(fileProps.tag && file[fileProps.tag])(
                                    <Badge style={{ marginLeft: 10,backgroundColor: Color.Green}}>
                                        <Text style={{ color: 'white'}}>{file[fileProps.tag]}</Text>
                                    </Badge>
                                )}
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                    }>
                </List>
            </Content>
        );
    }
}