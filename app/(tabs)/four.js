import {View,Text,StyleSheet} from "react-native"


export default function TabFour(){

    return(
        <View style={styles.container}>
            <Text>Tab four</Text>
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