import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class ProfileScreen extends React.Component {


    static navigationOptions = {
        title: 'Profile',
    };


    render() {
        return (
            <View style={styles.home}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
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

export default ProfileScreen;