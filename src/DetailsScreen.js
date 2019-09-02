import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
        return {
            title: navigation.getParam('title', 'A Nested Details Screen'),
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        
        return (
            <View style={styles.detailsScreen}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.popToTop()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ title: 'Updated!' })}
                />
                <Button
                    title="Modal"
                    onPress={() => this.props.navigation.navigate('MyModal')}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    detailsScreen: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center" 
    }
})

export default DetailsScreen;