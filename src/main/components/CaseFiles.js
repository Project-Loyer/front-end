import React, { Component } from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {LoyerHeader} from "./LoyerHeader";
import FilesMock from "../mock/Files";
import {FileList} from "../util/File";

export class CaseFiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caseFiles : FilesMock.caseFiles
        }
    }

    render() {
        return (
            <Container>
                <LoyerHeader goBack={this.props.navigation.navigate('CaseFiles')} {...this.props} title={"Expedientes"} />

                <FileList
                    filesArray={this.state.caseFiles}
                    onPressAction={(file) => this.props.navigation.navigate('CaseFile', {file: file})}
                    fileProps={{title:'id'}}
                />
            </Container>
        );
    }
}