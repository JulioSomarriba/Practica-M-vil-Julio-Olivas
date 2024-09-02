import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';


 function Cristiano(props) {
    return(
        <View >
          <Image style={styles.cristiano}  source={props.imagen}/>
          <Text style={styles.titulo}>{props.nombre}</Text> 
        </View>
    );
}

export default Cristiano;
const styles = StyleSheet.create({
    cristiano:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,

    },

    titulo:{
        fontSize:12,
        fontWeight:'bold',
        color:'blue',
    }

});