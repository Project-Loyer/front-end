import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet, Text,
    View
} from 'react-native';
import {Button} from "native-base";
import renderIf from "../util/renderIf";

export class Home extends Component<{}> {
    static navigationOptions = {
        title: 'Loyer',
    };

    constructor(props) {
        super(props);

        this.state = {loading: true};

        this.closeActivityIndicator = () => setInterval(() => {
            this.setState({ loading: false });
        }, 1500);
    }

    componentDidMount = () => this.closeActivityIndicator();
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                {renderIf(this.state.loading)(
                <ActivityIndicator
                    animating = {this.state.loading}
                    color = '#8BC34A'
                    size = "large"
                    style = {styles.activityIndicator} />
                )}

                {renderIf(!this.state.loading)(
                <Button
                    onPress={() => navigate('Login')}>
                    <Text>IR AL LOGIN</Text>
                </Button>
                )}
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
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 156
    }
});
