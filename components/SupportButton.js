import React from "react";
import { StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';

function SupportButton(props){
    return (
        <TouchableOpacity onPress={()=>{
            Linking.openURL('https://t.me/exchengesupport')
            
        }}>
           
                <Image 
                style={props.style}
                source={require('../assets/support_btn.png')}/>
            
        </TouchableOpacity>
    )
}

export default SupportButton;
