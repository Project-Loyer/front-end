import React, { Component } from 'react';
import {Tabs, Tab, TabHeading, Item, Label,Input, Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from "native-base";
import {LoyerHeader} from "./LoyerHeader";
import {FileList} from "../util/File";
import FilesMock from "../mock/Files";
import renderIf from "../util/renderIf";

export default class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentDocuments: FilesMock.documents.filter((doc) => doc.local),
            searchResult : []
        };

        this.isSearching = false;

        this.addNewDoc();
    }

    addNewDoc() {
        let newDoc = this.props.navigation.state.params ? this.props.navigation.state.params.newDoc : undefined;
        if (newDoc) {
            this.state.recentDocuments.unshift(newDoc);
            this.state.caseFiles.find(file => file.id === newDoc.caseFile).documents.unshift(newDoc);
        }
    }

    search(text) {
        if (this.isSearching) {
            clearTimeout(this.isSearching);
            this.isSearching = false;
        }
        if (text.length < 3) {
            this.setState({
                searchResult : []
            });
            return;
        }
        this.isSearching = setTimeout(()=>{
            let result = FilesMock.documents.filter(function(doc){
                return doc.title.toLowerCase().indexOf(text.toLowerCase()) >= 0
            });
            if (result.length > 0) {
                this.setState({
                    searchResult : result
                },()=>{
                    this.isSearching = false;
                });
            }

        },50);

    }

    render() {
        let tabPosition = {
            "documents" : 0,
            "search" : 1,
        };
        let selectedTab = 0;
        if (this.props.navigation.state.params && this.props.navigation.state.params.tab in tabPosition) {
            selectedTab = tabPosition[this.props.navigation.state.params.tab]
        }
        return (
            <Container>
                <LoyerHeader {...this.props} title={"Documentos"} noElevation/>
                <Tabs initialPage={selectedTab}>
                    <Tab heading={ <TabHeading><Icon name="md-list" /><Text>Guardados</Text></TabHeading>}>
                        <FileList
                            filesArray={this.state.recentDocuments}
                            onPressAction={(doc) => this.props.navigation.navigate('Document', {document: doc})}
                            firstItem={"RECIENTES"}
                            fileProps={{title:'title',tag:'approved'}}
                        />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="md-search" /><Text>Buscador</Text></TabHeading>}>
                        <Content style={{paddingTop:20}}>
                            <Item stackedLabel>
                                <Label>Inserte nombre de documento</Label>
                                <Input onChangeText={(text) => this.search(text)}/>
                            </Item>
                            {renderIf(this.state.searchResult.length > 0)(
                                <FileList
                                    filesArray={this.state.searchResult}
                                    onPressAction={(doc) => this.props.navigation.navigate('Document', {
                                        document: doc,
                                        headerGoBack : () => {
                                            this.props.navigation.navigate('Documents',{
                                                tab : "search"
                                            })
                                        }
                                    })}
                                    firstItem={"Documentos encontrados"}
                                    fileProps={{title:'title',tag:'approved'}}
                                />
                            )}
                        </Content>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}