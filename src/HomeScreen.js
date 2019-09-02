import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import Header from './Layout/Header';
import Logos from './Assets/logo.png';

class HomeScreen extends React.Component {

    state = {
        count: 0,
    };

    static navigationOptions = ({navigation})=>{
        return{
            headerTitle: <Header />,
            headerRight: (
                <View style={{'flexDirection': "row"}}>
                    <View style={{ marginRight: 5 }}>
                        <Button
                            onPress={navigation.getParam('decreaseCount')}
                            title="-1"
                            color="#2F4F4F"
                        />
                    </View>
                    <View style={{ marginRight: 5 }}>  
                        <Button
                            onPress={navigation.getParam('increaseCount')}
                            title="+1"
                            color="#2F4F4F"
                        />
                    </View>
                </View>    
            ),
            headerBackTitle: 'A much too long text for back button from B to A',
            headerTruncatedBackTitle: `to A`
           

        }
    };

    componentDidMount() {
        this.props.navigation.setParams({ 
            increaseCount: this._increaseCount, 
            decreaseCount: this._decreaseCount 
        });
    }

    _decreaseCount = ()=>{
        this.setState({ count: this.state.count - 1 });        
    }
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
        return (
            <View style={styles.Home}>
                <Text>Home Screen</Text>
                <Text style={styles.Count}>{this.state.count}</Text>
                <Button 
                    title="Go to Details"
                    color="#000"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                             title: 'Details',  
                             itemId: 86,
                             otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color:'#E6E6FA'
    },
    Count: {
        fontSize: 50,
        color: '#000'
    }
});

export default HomeScreen;