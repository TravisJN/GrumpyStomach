import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class FoodInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Whad jeat?"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    style={styles.submitButton}
                    title="Submit"
                    onPress={this.onSubmit}
                />
            </View>
        )
    }

    onSubmit = () => {
        const { navigation } = this.props;
        const submit = navigation.getParam('submit', () => console.log('fail'));
        submit(this.state.text);
        this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
    },
    submitButton: {
        paddingTop: 15
    }
});