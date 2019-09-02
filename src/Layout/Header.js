import React from 'react';
import {Image, View} from 'react-native';
import Logo from '../Assets/logo.png';



class Header extends React.Component {
    render() {
        return (
          
            <Image 
                source={Logo}
                style={{width: 30, height: 30, marginLeft: 5 }}
            />
      
        );
    }
}


export default Header;
