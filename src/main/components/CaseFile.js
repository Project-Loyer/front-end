import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {color} from "../global/Color";
import ActionButton from "react-native-action-button";
import {LoyerHeader} from "./LoyerHeader";
import {FileList} from "../util/File";

export class CaseFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: props.navigation.state.params.file
        };
    }

    componentDidMount() {
        this.setState({
            file: this.props.navigation.state.params.file
        });
    }

    render() {

        return (
            <Container>

                <LoyerHeader
                    goBack={()=>this.props.navigation.navigate("CaseFiles")}
                    title={`Expediente ${this.state.file.id}`}
                />

                <FileList
                    filesArray={this.state.file.documents}
                    onPressAction={(doc) => this.props.navigation.navigate('Document', {
                        document: doc,
                        headerGoBack : () => this.props.navigation.navigate("CaseFile",{
                            file : this.state.file
                        })
                    })}
                    firstItem={`Documentos del expediente ${this.state.file.id}`}
                    fileProps={{title:'title',tag:'approved'}}
                />


                <ActionButton buttonColor={color.primary.light}>
                    <ActionButton.Item
                        buttonColor={color.primary.color}
                        title="Subir documento"
                        onPress={() => this.props.navigation.navigate('NewDocument', {
                            caseFile: this.state.file,
                            goBack : () => this.props.navigation.navigate("CaseFile",{
                                file : this.state.file
                            })
                        })}>
                        <Icon name="cloud-upload" style={styles.fabIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    fabIcon: {
        fontSize: 22,
        height: 22,
        color: 'white'
    }
});