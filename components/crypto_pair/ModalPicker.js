import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View,
    TouchableOpacity, Dimensions, ScrollView, Image, TextInput
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import { GlobalStyles } from "../../constants/styles";

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function ModalPicker(props){

    function onPressItem(item){
        props.changeVisibility(false);
        props.setData(item);       
    }

    function itemSeparator(){
        return <View style={{height:2, width: '100%' , backgroundColor: GlobalStyles.colors.primaryBackground}}/>
    }

    return(

        

       <View style={styles.container}>

        

        

            <View style={[styles.modal, {width: WIDTH>1200 ? WIDTH * 0.6 : WIDTH * 0.9, height: HEIGHT * 0.7,}]}>


            <TextInput
               style={{width: WIDTH<1000 ? 100 : 200,
                   height: 20,
                   marginVertical:  20,
                   backgroundColor: 'white',
                   borderRadius: 10,
                   textAlign: 'center',
                   outlineStyle: 'none',
                   borderColor: GlobalStyles.colors.primaryBackground,
                   borderWidth: 2,
                   color: GlobalStyles.colors.primaryBackground}}
                   placeholder={'Search'} 
                   placeholderTextColor={'black'}
                   
            
                value={props.search}
                onChangeText={text => props.searchFilter(text)}
            />

            <TouchableOpacity 
            onPress={()=> props.changeVisibility(false)}
            style={{position: 'absolute', top:5, right: 20}}>
                <Text style={{fontSize: 20, color: GlobalStyles.colors.primaryBackground, fontWeight:'bold'}}>x</Text>
            </TouchableOpacity>
            

                <TouchableOpacity
        onPress={()=> props.changeVisibility(false)}
        style={styles.container}>



                <FlatList
                numColumns={3}
                ItemSeparatorComponent={itemSeparator}
                data={props.currencies}
                showsVerticalScrollIndicator={false}
                keyExtractor={({id}, index) => id}
                renderItem={({item})=>(
                    <View >
                
                <TouchableOpacity style={styles.opacity}
                
                onPress={()=> onPressItem(item)}>
                        <View style={{ borderRadius: 20, flexDirection: WIDTH>500 ?'row': 'column',alignItems: 'center', margin: 5, width: WIDTH * 0.15}}>
                
                            <Image
                                style={styles.image} 
                                source={{
                                    uri: `${item.image}`
                                }}
                                
                                />
                
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.name}</Text>
                               
                                <Text style={styles.text}>{item.current_price}$</Text>
                            </View>
                
                                </View>
                                </TouchableOpacity>
                                </View>
                )}/>

</TouchableOpacity>

            </View>

        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    modal:{
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    opacity: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    text: {
        margin: 20,
        fontSize: 20,
        
    },
    image:{
        width: 50 , 
        height:  50 ,
        borderRadius: 25,
        margin: 10
        
    },
    textContainer:{
        flexDirection: 'column',
        margin: 10,
        width: WIDTH * 0.2
    },
    insideContainer:{
        margin: 5,
        flexDirection: 'row',

    },
    text:{
        color: GlobalStyles.colors.primaryBackground
    }

})

export default ModalPicker;