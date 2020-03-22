import React from "react";
import { View, StatusBar, Text, StyleSheet, Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default Screen = ({ name }) => (
<View>
    <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={true}/>
        <FontAwesome name='bars' size={30} color="#00a8cc"/>
        <Image source={require('./icon2.png')} style={styles.logo}/>
    </View> 
        <View style={styles.animContainer}>
            <Text style={styles.text}>Servicios de Imagen para el diagnostico</Text>  
        </View> 
 </View>
);
const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        fontWeight: 'bold',  
    },
    logo:{
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        marginTop: 0.5,
        marginLeft: 10,
    },
    container: {
      alignSelf: 'stretch',
      height: 70,
      flexDirection: 'row', // row
      backgroundColor: '#173F5F',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 40,
      paddingRight: 60,

    },
   animContainer:{
    width: 190,
    height: 110,
    flexDirection: 'row', // row
    backgroundColor: '#00a8cc',
    marginTop: 430,
    borderRadius: 0.5,
    borderWidth: 0.5,
   },
  });