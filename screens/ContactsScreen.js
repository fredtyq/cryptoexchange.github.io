import React from "react";
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import ScreenTemplate from "../components/ScreenTemplate";
import { GlobalStyles } from "../constants/styles";
import SupportButton from "../components/SupportButton";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('screen').height;


function ContactsScreen({navigation}){

    function openSupport(){
    navigation
    }
    

    return(
        <>
        <ScreenTemplate>
            <ScrollView
             contentContainerStyle={{alignItems: 'center', height: HEIGHT}}
             showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Contacts</Text>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.textRegular}>If you have any questions, please contact our support team via telegram or mail.</Text>
                </View>
                <View style={styles.supportContainer}>
                    <SupportButton
                    style={styles.supportImage}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.simpleText}>Telegram:</Text> 
                        <Text style={styles.simpleText}>Open support chat by clicking icon</Text>        
                    </View>     
                </View>
                <View style={styles.supportContainer}>
                    <Image
                    style={styles.supportImage}
                    source={require('../assets/post_icon.png')}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.simpleText}>Mail support:</Text> 
                        <Text style={styles.simpleText}>support@{GlobalStyles.names.web_name}</Text>        
                    </View>     
                </View>
                <View style={styles.supportContainer}>
                    <Image
                    style={styles.supportImage}
                    source={require('../assets/clock_icon.png')}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.simpleText}>Operating time:</Text> 
                        <Text style={styles.simpleText}>Available from 7:00 to 22:00</Text>        
                    </View>     
                </View>
            </View>
              

</ScrollView>
<Text style={{position: 'absolute', left: 0, bottom: 0, color: 'white'}}>© {GlobalStyles.names.web_name}</Text>

        </ScreenTemplate>
        
        </>
    ) 
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: GlobalStyles.colors.primaryContainerBackgColor,
        borderRadius: 10,
        alignItems: 'center',
        width: WIDTH> 1200 ? WIDTH * 0.6 :WIDTH * 0.95,
        height: 450, marginVertical: 50

    },
    textHeader:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white', 
        margin: 15
    },
    textRegular:{
        fontSize: 18,
        color: 'white'
    },
    headerTextContainer:{
        alignItems: 'flex-start',
        width: WIDTH>1000 ? 600 : 300,
        height: 80,
    },
    supportContainer:{
        width: WIDTH>1000 ? 600 : 320,
        height: 70,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    supportImage: {
        width: 60,
        height: 60
    },
    simpleText:{
        fontSize: 13,
        color: 'white',
        margin: 5
    },
    supBtn:{
        width: 70,
        height:70
    },
   
})
export default ContactsScreen;