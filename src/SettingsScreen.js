import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class SettingsScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={styles.home}>
                <Text>Settings Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    }
});

export default SettingsScreen;