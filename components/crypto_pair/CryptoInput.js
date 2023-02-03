import React from "react";
import {Dimensions, TextInput} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


function CryptoInput(props){
    return(

        <TextInput
            value={props.amount}
            onChange={ev => props.onAmountChange(ev.target.value)}
            style={{width:100,
                height: 50,
                backgroundColor: 'white',
                borderTopStartRadius: 10,
                borderBottomStartRadius: 10,
                textAlign: 'center',
                outlineStyle: 'none',
                borderEndColor: 'black',
                borderEndWidth: 1
            }}
           
            maxLength={10}
            editable={props.editable}   
            />
    )

}



export default CryptoInput;