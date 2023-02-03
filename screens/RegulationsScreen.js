import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { } from "react-native-gesture-handler";
import ScreenTemplate from "../components/ScreenTemplate";
import { GlobalStyles } from "../constants/styles";
import SupportButton from "../components/SupportButton";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('screen').height;

function RegulationsScreen(){



    return (
        <ScreenTemplate>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                flexDirection: WIDTH> 1200 ? 'row' : 'column'

            }}
            showsVerticalScrollIndicator={false}
            >
            
                
                <View style={{flexDirection: 'column'}}>
                <View style={[styles.headerContainer, {width: WIDTH>1200 ? 700 : 350}]}>
                <Text style={styles.headerText}>Brief description of the main Terms of Service</Text>
                </View>
                <View style={[styles.bodyContainer, , {width: WIDTH>1200 ? 700 : 350}]}>
                <Text style={styles.simpleTextHeader}>Regulations for exchange and fixing the exchange rate:</Text>
                <Text style={styles.simpleText}>{`\u2022`} Applications are processed manually during business hours from 7:00 to 19:00.</Text>
                <Text style={styles.simpleText}>{`\u2022`} The support service is available on weekdays from 7:00 to 22:00.</Text>
                <Text style={styles.simpleText}>{`\u2022`} The exchange rates in the list are always up-to-date and updated every time the page is refreshed.</Text>
                <Text style={styles.simpleText}>{`\u2022`} When purchasing Virtual Assets, the rate is fixed at the time of payment for the application through the merchant.</Text>
                <Text style={styles.simpleText}>{`\u2022`} When selling Virtual Assets, the rate is fixed and the amount payable is recalculated after the transaction is confirmed in the Blockchain network.</Text>
                <Text style={styles.simpleTextHeader}>Sale of virtual assets:</Text>
                <Text style={styles.simpleText}>{`\u2022`} In case of sending virtual assets, the transaction rate and the amount to be paid are calculated after 2 (Bitcoin) or 4 (Ethereum) confirmations of the transaction in the network or after confirmation of a successful payment in the payment system. After the exchange rate is fixed, the amount to be paid is transferred manually to the details specified by the client. Payments are made to any hryvnia cards issued by Ukrainian banks. After confirmation, the crediting period usually takes from 20 to 50 minutes, depending on the card issuing bank.</Text>
                <Text style={styles.simpleTextHeader}>Purchase of virtual assets:</Text>
                <Text style={styles.simpleText}>{`\u2022`} Card payments are processed on the side of the payment system in real time. After receiving a notification about the success of the client's payment, the payment of Virtual Assets is manually initiated to the address specified by the client, with priority debiting of the commission, during business hours. The terms of crediting Virtual Assets to the client's address depend on the load on the Bitcoin or Ethereum network. As a rule, the system receives confirmation after payment instantly, but in some cases there may be delays on the part of the payment system or bank. Also, please note that the amount to be paid will be revised against the current exchange rate at the time of payment - which is fixed after the payment is received through our merchant.</Text>
                <Text style={styles.simpleTextHeader}>Payment sending errors:</Text>
                <Text style={styles.simpleText}>{`\u2022`} When sending a payment, the system may be refused, about which the client will be notified via email specified by client. For a number of possible reasons: - Failure of the payment system - one of the reasons, possible temporary technical work. - The client specified incorrect details - non-existent, incorrect, blocked account number. - Refusal to credit from the issuer's bank - a currency card is indicated or the limit for receiving funds has been exceeded. Applications with this status are processed by the operator during working hours. All questions about the term of the transfer can be asked by contacting our Support Service. If it is impossible to send funds to the client or transfer them in another possible way, not through the fault of the service, the amount of funds will be returned to the client, minus the commission for sending.</Text>
                <Text style={styles.simpleTextHeader}>Payment from stolen cards:</Text>
                <Text style={styles.simpleText}>{`\u2022`} In case of suspicion of using stolen card data, the service reserves the right to suspend the sending of Virtual Assets - until the situation is clarified.</Text>
                <Text style={styles.simpleTextHeader}>User Identity Verification:</Text>
                <Text style={styles.simpleText}>{`\u2022`} In some cases, when making returns or withdrawals to other details, the service may request from the user documents - confirming the identity and conduct Skype - Call, to fully identify the user and his details.</Text>
                <Text style={styles.simpleTextHeader}>Refund Policy:</Text>
                <Text style={styles.simpleText}>{`\u2022`} If it is impossible to send funds to the client, through no fault of the service, the amount of funds will be returned to the client minus the commission for sending. The assets will be sent to the same address from which the client made the transfer of funds in favor of the service. In the event of a change in the details for the return of assets, on the part of the client, the service has the right to request any information to identify the client as the true owner of the assets.</Text>
                <Text style={styles.simpleTextHeader}>Rules for solving problem situations:</Text>
                <Text style={styles.simpleText}>{`\u2022`} All issues that arise are resolved through our Support Service. To resolve your issue, be sure to indicate the application number, describe the problem in detail, if necessary, immediately indicate new payment details. Terms of consideration of the appeal - during the working hours of the Support Service. Outside business hours, consultations will be provided as quickly as possible.</Text>
                <Text style={styles.simpleTextHeader}>Force majeure circumstances:</Text>
                <Text style={styles.simpleText}>{`\u2022`} It is possible to deviate from the rules for performing operations in case of situations that arose through no fault of the service. Most operations involve a third party (Banks, Payment systems) and in case of malfunctions on the side of the intermediary (technical work, loss of transfer within the system, etc.), the time for troubleshooting on the side of the service - intermediary is added to the deadlines according to the regulations.</Text>
                </View>
                </View>

                
            </ScrollView>

<Text style={{position: 'absolute', left: 0, bottom: 0, color: 'white'}}>© {GlobalStyles.names.web_name}</Text>

<View style={styles.supBtnconteiner}>
<SupportButton
style={styles.supBtn}/>
</View>

        
        </ScreenTemplate>
    
    )
}

const styles = StyleSheet.create({
    supBtn:{
        width: 70,
        height:70,
        
        
    
    },
    supBtnconteiner:{
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10
    },
    simpleText:{
        fontSize: 14,
        color: 'white',
        margin: 8,
        opacity: 0.8
    },
    simpleTextHeader:{
        fontSize: 14,
        color: 'white',
        margin: 8,
        fontWeight: 'bold'
    },
    headerContainer: {
        backgroundColor: GlobalStyles.colors.primaryContainerBackgColor, 
        height:80, 
        marginTop: 20, 
        margin:5, 
        marginBottom:5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth:1, 
        borderColor: 'white',
        width: 350,
        borderRadius: 25,

    },
    bodyContainer: {
        marginBottom: 30, 
        backgroundColor: GlobalStyles.colors.primaryContainerBackgColor, 
        marginTop: 0, 
        margin:5,
        borderWidth:1, 
        borderColor: 'white',
        width: 350,
        borderRadius: 25,
        padding: 15
    }

})

export default RegulationsScreen;