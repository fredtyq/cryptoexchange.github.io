import React from "react";
import { Image, StyleSheet } from "react-native";

export function getImageFromUrl(props){
    return <Image
    style={styles.image}
    source={{
        uri: `${props}`
    }}/>
}

const styles = StyleSheet.create({
    image:{
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20   
    },
})