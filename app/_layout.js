import React from "react"
import {StyleSheet,View,Text} from "react-native"

export default function Layout(){
    return(
        <View style={styles.container}>
            <Text>Main Routes</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})