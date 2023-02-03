import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button, Pressable, ScrollView, Dimensions, TouchableOpacity, Modal, SafeAreaView, ActivityIndicator, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { GlobalStyles } from "../constants/styles";
import SupportButton from "../components/SupportButton";
import { getImageFromUrl } from "../util/image";
import CryptoInput from "../components/crypto_pair/CryptoInput";
import ModalPicker from "../components/crypto_pair/ModalPicker";
import BackgroundColorTemplate from "../components/ScreenTemplate";
import axios from "axios";


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('screen').height;
 



function HomeScreen(){

    const [isLoading, setLoading] = useState(true);

    const [chooseData1, setChooseData1] = useState({"id":"binance-usd","symbol":"busd","name":"Binance USD","image":"https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766","current_price":1.0,"market_cap":15735468894,"market_cap_rank":7,"fully_diluted_valuation":15693913609,"total_volume":9768034260,"high_24h":1.005,"low_24h":0.991425,"price_change_24h":-0.000142295859318908,"price_change_percentage_24h":-0.01422,"market_cap_change_24h":37419897,"market_cap_change_percentage_24h":0.23837,"circulating_supply":15727472599.69,"total_supply":15685938432.56,"max_supply":null,"ath":1.15,"ath_change_percentage":-13.31649,"ath_date":"2020-03-13T02:35:42.953Z","atl":0.901127,"atl_change_percentage":11.02812,"atl_date":"2021-05-19T13:04:37.445Z","roi":null,"last_updated":"2023-01-31T15:47:00.091Z"})
    const [chooseData2, setChooseData2] = useState({"id":"binance-usd","symbol":"busd","name":"Binance USD","image":"https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766","current_price":1.0,"market_cap":15735468894,"market_cap_rank":7,"fully_diluted_valuation":15693913609,"total_volume":9768034260,"high_24h":1.005,"low_24h":0.991425,"price_change_24h":-0.000142295859318908,"price_change_percentage_24h":-0.01422,"market_cap_change_24h":37419897,"market_cap_change_percentage_24h":0.23837,"circulating_supply":15727472599.69,"total_supply":15685938432.56,"max_supply":null,"ath":1.15,"ath_change_percentage":-13.31649,"ath_date":"2020-03-13T02:35:42.953Z","atl":0.901127,"atl_change_percentage":11.02812,"atl_date":"2021-05-19T13:04:37.445Z","roi":null,"last_updated":"2023-01-31T15:47:00.091Z"})
    
    const[amount1, setAmount1] = useState(1)
    const[amount2, setAmount2] = useState(1)

    const[emailData, setEmailData] = useState('')
    const[cryptoAdress, setCryptoAdress] = useState('')
    
    const [isVisible1, setIsVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    
    const [cryptoData, setCryptoData] = useState([])

    const[filteredData1, setFilteredData1] = useState([])
    const[search1, setSearch1] = useState('')

    const[filteredData2, setFilteredData2] = useState([])
    const[search2, setSearch2] = useState('')

    useEffect( ()=>{
        fetchData()    
    },[])

    const handleCustomerData = () => {
        const data ={
            Request_n: rndmNum ,
            Wallet: cryptoAdress,
            Recieve_currency: chooseData2.name,
            Currency_amount_to_recieve: amount2,
            Email: emailData,
            Give_currency: chooseData1.name,
            Currency_amount_to_give: amount1
        }
        axios.post('https://sheet.best/api/sheets/3501a9a1-c0bf-4dbb-b182-7079701a351f', data)
    }
 

    useEffect(  () => {

    setAmount2((amount1 * chooseData1.current_price/chooseData2.current_price).toFixed(6))
           

      }, [chooseData1]);


      useEffect(  () => {

        setAmount1((amount2 * chooseData2.current_price/chooseData1.current_price).toFixed(6)) 
               
    
          }, [chooseData2]);


    const fetchData = () =>{
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        fetch(url)
        .then((response)=> response.json())
        .then((json)=> {
            const coin = json.filter((item) => item.id === 'bitcoin')
            const coin1 = json.filter((item) => item.id === 'polkadot')
            const coin2 = json.filter((item) => item.id === 'ethereum')
            const coin3 = json.filter((item) => item.id === 'binancecoin')
            const coin4 = json.filter((item) => item.id === 'ripple')
            const coin5 = json.filter((item) => item.id === 'binance-usd')
            const coin6 = json.filter((item) => item.id === 'dogecoin')
            const coin7 = json.filter((item) => item.id === 'solana')
            const coin8 = json.filter((item) => item.id === 'litecoin')
            const coin9 = json.filter((item) => item.id === 'tron')
            const coin10 = json.filter((item) => item.id === 'ethereum-classic')
            const coin11 = json.filter((item) => item.id === 'monero')
            const coin12 = json.filter((item) => item.id === 'trust-wallet-token')
            const coin13 = json.filter((item) => item.id === 'zcash')
            const coin14 = json.filter((item) => item.id === 'dash')
            const coin15 = json.filter((item) => item.id === 'cardano')
            const coin16 = json.filter((item) => item.id === 'tether')
            
            
            const cryptoData = coin.concat(coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9
                , coin10, coin11, coin12, coin13, coin14, coin15, coin16)
           
            setCryptoData(cryptoData)
            setFilteredData1(cryptoData)
            setFilteredData2(cryptoData)
        })
        .catch((error)=> console.error(error))
        .finally(setLoading(false))
    }
   
    function format(number){
        return number.toFixed(8)
       }

    function changeVisibility1(bool){
        setIsVisible1(bool)
       
    }
    
    function changeVisibility2(bool){
        setIsVisible2(bool)
        
    }

    function setData1(option){
        setChooseData1(option)
    }

    function setData2(option){
        setChooseData2(option)
    }

    const name1 = getImageFromUrl(chooseData1.image)
    const name2= getImageFromUrl(chooseData2.image)

    function handleAmount1Change(amount1){
        setAmount2(amount1 * format(chooseData1.current_price/chooseData2.current_price) );
        setAmount1(amount1);
    }

    function handleAmount2Change(amount2){
        setAmount1(amount2 * format(chooseData2.current_price/chooseData1.current_price));
        setAmount2(amount2);  
    }



     

    const searchFilter1 = (text) => {
        if(text){
            const newData = cryptoData.filter((item)=> {
                const itemData = item.name ? 
                            item.name.toUpperCase()
                            : ''.toUpperCase();
            const textData = text.toUpperCase();   
            return itemData.indexOf(textData) > -1;            
            })
            setFilteredData1(newData);
            setSearch1(text);
        }else{
            setFilteredData1(cryptoData);
            setSearch1(text);
        }
    }

    const searchFilter2 = (text) => {
        if(text){
            const newData = cryptoData.filter((item)=> {
                const itemData = item.name ? 
                            item.name.toUpperCase()
                            : ''.toUpperCase();
            const textData = text.toUpperCase();   
            return itemData.indexOf(textData) > -1;            
            })
            setFilteredData2(newData);
            setSearch2(text);
        }else{
            setFilteredData2(cryptoData);
            setSearch2(text);
        }
    }


   
    const rndmNum =  Math.floor(Math.random() * (400000 - 100000 + 1)) + 100000;

    const navigation = useNavigation();

    function goToExchange(){
        navigation.navigate('Order', {
            coin1: chooseData1,
            coin2: chooseData2,
            client_wallet: cryptoAdress,
            email: emailData,
            amountGive: amount1,
            amountRecieve: amount2,
            rndNumber: rndmNum
        });
        console.log(cryptoAdress)
        console.log(emailData)

        handleCustomerData();

    }




    
    return(
        <>

        

<BackgroundColorTemplate>


        <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', flexGrow: 1, width: WIDTH}}
        showsVerticalScrollIndicator={false}
        
        >
            
            <View style={{flexDirection: WIDTH >1000 ? 'row' : 'column'}}>

            
            <View style={{flexDirection: WIDTH>100 ? 'column' : 'row'}}>

            

         <View style={[styles.cryptoEl, {height: 170}]}>
           
           <Text style={{color: 'white', position: 'absolute',  top: 40, left: 40, fontSize: 20}}>Give</Text>

           
           <View style={{flexDirection: 'row', position: 'absolute', bottom: 40}}>

            

           <CryptoInput
           amount={amount1}
           onAmountChange={handleAmount1Change}/>


           <View style={styles.cryptoSymbl}>

           <Text style={{textTransform: 'uppercase'}}>{chooseData1.symbol}</Text>
           </View>


            
            <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={()=>changeVisibility1(true)}
            >

                <Text style={styles.text}>{name1}</Text>

            </TouchableOpacity>

            {isLoading ? <ActivityIndicator/> :
            
            
            <Modal
            transparent={true}
            animationType='fade'
            visible={isVisible1}
            nRequestClose={()=> changeVisibility1(false)}>

            <ModalPicker
            changeVisibility={changeVisibility1}
            setData={setData1}
            currencies={filteredData1}
            search={search1}
            searchFilter={searchFilter1}
            />


            </Modal>
            }

            

            </View>
           
            </View> 


            <View style={[styles.cryptoEl, {height: 170}]}>


 
            <Text style={{color: 'white', position: 'absolute',  top: 40, left: 40, fontSize: 20 }}>Recieve</Text>

            <View style={{flexDirection: 'row', position: 'absolute', bottom: 40}}>

            <CryptoInput
           amount={amount2}
           onAmountChange={handleAmount2Change}
           />

           <View style={styles.cryptoSymbl}>
           <Text style={{textTransform: 'uppercase'}}>{chooseData2.symbol}</Text>
           </View>

           

            
            <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={()=>changeVisibility2(true)}
            >

                <Text style={styles.text}>{name2}</Text>

            </TouchableOpacity>

            <Modal
            transparent={true}
            animationType='fade'
            visible={isVisible2}
            nRequestClose={()=> changeVisibility2(false)}>

            <ModalPicker
            changeVisibility={changeVisibility2}
            setData={setData2}
            currencies={filteredData2}
            search={search2}
            searchFilter={searchFilter2}
           />


            </Modal>
            </View>
            </View>
           
            </View>

            <View style={[styles.cryptoEl, {flexDirection: 'column', height: 380, marginBottom: 50}]}>
            <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>Exchange Request</Text>
            <TextInput
             style={{width:  250,
                height: 50,
                marginVertical:  20,
                backgroundColor: 'white',
                borderRadius: 10,
                textAlign: 'center',
                outlineStyle: 'none',
                borderEndColor: 'black',
                borderEndWidth: 1,
                padding: 15
                
            }}
            placeholder={'Wallet adress'}
            value={cryptoAdress}
            onChangeText={text=>setCryptoAdress(text)}
            editable={true}
            keyboardType={'default'}
            />


           


           
            <TextInput
             style={{width:  250,
                height: 50,
                marginVertical: WIDTH<1000 ? 5 : 20,
                backgroundColor: 'white',
                borderRadius: 10,
                textAlign: 'center',
                outlineStyle: 'none',
                padding: 15
                
                
            }}
            placeholder={'Email adress'}
            value={emailData}
            onChangeText={text=>setEmailData(text)}
            editable={true}
            keyboardType={'email-address'}
            />

<Text  numberOfLines={5} style={{color: 'white', fontSize: 12}}> I have read the Terms of Service </Text>
<Text  numberOfLines={5} style={{color: 'white', fontSize: 12}}> and accept the User Agreement</Text>

            <TouchableOpacity onPress={goToExchange}
            style={styles.exchangeBtn}>
           <Text style={{color: 'white' , fontSize: 20}}>Order an exchange</Text>
           </TouchableOpacity>
            </View>
            </View>   
            
            <Text style={{position: 'absolute', left: 0, bottom: 0, color: 'white'}}>© {GlobalStyles.names.web_name}</Text>
            
        </ScrollView>


        </BackgroundColorTemplate>
       
            
            {/* </LinearGradient> */}
            {/* </> */}
            
            
            
<View style={styles.supButton}>
<SupportButton 
style={styles.image}/>
</View>



</>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: WIDTH > 1200 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity:{
        backgroundColor: 'white',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        position: 'absolute'
    },
    cryptoSymbl: {
        backgroundColor: 'white',
        width: 80,
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderEndColor: 'black', 
        borderEndWidth: 1 
    },
    cryptoEl:{
        
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colors.primaryContainerBackgColor,
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 20,
        width: 300,
        borderRadius: 10,
    },
    supButton: {
       position: 'absolute',
       bottom: 5,
       right: 5,   
       marginTop: 20
    },
    exchangeBtn:{
        backgroundColor: GlobalStyles.colors.primatyBtn, 
        margin: 20, 
        width: 200, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 30,   
    },
    header:{
        height:40,
        width: WIDTH,
        backgroundColor: GlobalStyles.colors.primaryHeader,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        width: 70,
        height:70
    },
    headerImage:{
        width: 30, 
        height: 30, 
        marginHorizontal: 20
    },
    headButton: {
        position: 'absolute',
        top: 5,
        right: 5,   
        marginTop: 20
     },
     headButton1: {
        position: 'absolute',
        top: 5,
        left: 5,   
        marginTop: 20
     },
    });

