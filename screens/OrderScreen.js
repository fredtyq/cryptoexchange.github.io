import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, Dimensions, TouchableOpacity, Modal, Clipboard} from 'react-native';
import { color } from "react-native-reanimated";
import ScreenTemplate from "../components/ScreenTemplate";
import { GlobalStyles } from "../constants/styles";
import { getImageFromUrl } from "../util/image";
import { WALLETS } from "../wallets_model/wallets_data";
import SupportButton from "../components/SupportButton";



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function OrderScreen({route, navigation}){

    const [isVisible, setIsVisible] = useState(false)
    const[number, setNumber] = useState()


    function changeVisibility(bool){
        setIsVisible(bool)
    }

   
    

    const {coin1, coin2, client_wallet, email, amountGive, amountRecieve, rndNumber} = route.params;
    useEffect( ()=>{
        const rndmNum =  Math.floor(Math.random() * (400000 - 100000 + 1)) + 100000;
        setNumber(rndmNum)
    },[])

   
    const properWallet = WALLETS.find((wallet)=> wallet.id === coin1.id);
    const properImage =  properWallet.image;
    const requestNum = rndNumber;

    const coinOne = getImageFromUrl(coin1.image)
    const coinTwo = getImageFromUrl(coin2.image)

    return (
        
     
    <ScreenTemplate>
        
        
            
            
                <ScrollView 
                style={{width: WIDTH, heigh: HEIGHT}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: WIDTH>1000 ? 'row': 'column'}}
                >
                    
                <View style={[GlobalStyles.containers.container, {marginBottom: 30, backgroundColor: GlobalStyles.colors.primaryContainerBackgColor}]}>
                    <Text style={styles.requestNum}>Request Nº {requestNum} </Text>
                    <View style={styles.itemPropsContainer}>
                        <Text style={styles.itemProps}>Give:</Text>
                        <Text style={styles.itemProps}>{coinOne}</Text>
                        <Text style={styles.itemProps}>{amountGive}</Text>
                    </View>

                    <View style={styles.itemPropsContainer}>
                        <Text style={styles.itemProps}>Recieve:</Text>
                        <Text style={styles.itemProps}>{coinTwo}</Text>
                        <Text style={styles.itemProps}>{amountRecieve}</Text>
                    </View> 

                    <View style={[styles.itemPropsContainer]}>
                        <Text style={styles.itemProps}>Adress:</Text>
                        <TextInput
                        style={{
                            outlineStyle: 'none',
                            color: 'white'
                        }}
                        value={client_wallet}
                        editable={false}
                        multiline={true}/>
                    </View> 

                    <View style={styles.itemPropsContainer}>
                        <Text style={styles.itemProps}>Email:</Text>
                        <TextInput
                        style={{
                            outlineStyle: 'none',
                            color: 'white'
                        }}
                        value={email}
                        editable={false}
                        multiline={true}/>
                    </View>

                    <Text style={{margin: 10, color: 'white', opacity: 0.7}}>{`\u2022`} The exchange rate is fixed at the time of the exchange order.</Text>
                    <Text style={{marginHorizontal: 10, color: 'white', opacity: 0.7}}>{`\u2022`} Rate is set according to the CoinGecko rate.</Text>

                </View>

                <View style={[GlobalStyles.containers.container, {marginBottom: 30, backgroundColor: GlobalStyles.colors.primaryContainerBackgColor}]}>
                    <Text style={styles.requestNum}>Payment request</Text>
                    
                    <Text style={[styles.itemProps, {marginHorizontal: 20}]}>Amount</Text>
                    
                    <TextInput style={[styles.walletContainer, {outlineStyle: 'none',}]}
                    value={amountGive + coin1.symbol}
                    editable={false}
                    />

                    
                    
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                    <Text style={[styles.itemProps, {marginHorizontal: 20}]}>To the wallet</Text>

                    <TouchableOpacity
                    onPress={()=> changeVisibility(true)}
                    >
                        <Image
                        style={styles.qrIcon}
                        source={require('../assets/qr_icon.png')}/>

                    </TouchableOpacity>

                    <Modal
                       transparent={true}
                       animationType='fade'
                       visible={isVisible}
                       nRequestClose={()=> setIsVisible(false)}> 

                       <View style={styles.modalContainer}>

                       <View style={[styles.modal, {width: 300, height: 300}]}>
                       <TouchableOpacity 
                           onPress={()=> changeVisibility(false)}
                           style={{position: 'absolute', top: 5, right: 15}}>
                           <Text style={{fontSize: 20, fontWeight: 'bold', color: GlobalStyles.colors.primaryBackground}}>x</Text>
                      </TouchableOpacity>

                      <Image
                      style={styles.qrImage}
                      source={properImage}
                      />


                       </View>
                       </View>

                       

                       



                    </Modal>


                   </View>


                    <TextInput style={[styles.walletContainer, {marginBottom:10}]}
                    value={properWallet.adress}
                    editable={false}
                    showsVerticalScrollIndicator={false}
                    multiline={true}
                    />

                        <View style={styles.informationContainer}>
                        <Image
                        style={styles.image}
                        source={require('../assets/information_icon.png')}/>
                        <Text style={{marginLeft: 35, color: 'white', fontSize: 15, opacity: 0.7}}>{`\u2022`} The order for exchange  has been recieved.</Text>
                        <Text style={{marginLeft: 35, color: 'white', fontSize: 15, opacity: 0.7}}>{`\u2022`} The system fixes the exchange rate and recalculates the amount to be received after 4 transaction confirmations online.</Text>
                        <Text style={{marginLeft: 35, color: 'white', fontSize: 15, opacity: 0.7}}>{`\u2022`} In case making an error in the transfer, please contact the support service, where your order will be established and the issue will be resolved.</Text>
                        </View>
                </View>

                

               
                </ScrollView>
                
                
            
            
                <Text style={{position: 'absolute',left:0, bottom: 0, color: 'white'}}>© {GlobalStyles.names.web_name}</Text>
                <View style={styles.supBtnconteiner}>
<SupportButton
style={styles.supBtn}/>
</View>

        </ScreenTemplate>
       
    )
}

const styles = StyleSheet.create({
    requestNum:{
        color: 'white',
        fontSize: 25,
        margin: 20,
        fontWeight: 'bold'
    },
    itemProps: {
        color: 'white',
        fontSize: 15,
    },
    itemPropsContainer:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
    },
    walletContainer:{
        width: 310,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 15,
        textAlign: 'center',
        padding: 5,
        justifyContent: 'space-around'
        
    },
    image: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 0,
        top: 0 
    },
    informationContainer:{
        marginHorizontal: 10,
        marginVertical: 0,
        justifyContent: 'center',
    },
    qrIcon:{
        width: 30,
        height: 30,
        marginHorizontal: 20,
    },
    modal:{
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrImage: {
        width: 220,
        height: 220
    },
    header:{
        height:50,
        width: WIDTH,
        backgroundColor: GlobalStyles.colors.primaryHeader,
        flexDirection: 'row',
        alignItems: 'center'

    },
    headerImage:{
        width: 30,
        height: 30
    },
    supBtn:{
        width: 70,
        height:70,
        
        
    
    },
    supBtnconteiner:{
        position: 'absolute',
        right: 5,
        bottom: 5,
    }
})
export default OrderScreen;