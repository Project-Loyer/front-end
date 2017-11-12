import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';
import {Button} from "native-base";

export class Home extends Component<{}> {
    static navigationOptions = {
        title: 'Loyer',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Login')}>
                    <Text>IR AL LOGIN</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F1F8E9',
        padding: 24
    }
});
