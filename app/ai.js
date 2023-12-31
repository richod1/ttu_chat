import {StatusBar} from 'expo-status-bar'
import {Platform,StyleSheet} from 'react-native'
import {View,Text} from '../components/Themed'
export default function AiScreen(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Ai</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <StatusBar style={Platform.OS==='ios'?'light':'auto'}/>
        
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    title:{
    fontSize:20,
    fontWeight:'bold'

    },
    separator:{
        marginVertical:30,
        height:1,
        width:'80%'
    }
})