import {ScrollView, StyleSheet, Text, View } from 'react-native';
import Cristiano from './Componentes/Cristiano';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.tituloText}>Galeria Cristiano</Text>
       <ScrollView>
        <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga.jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (1).jpeg')}
        ></Cristiano>

      <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (2).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (3).jpeg')}
        ></Cristiano>

      <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (4).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (5).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (6).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (7).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (8).jpeg')}
        ></Cristiano>

       <Cristiano
        nombre='Cristiano'
        imagen={require('./Imagenes/descarga (9).jpeg')}
        ></Cristiano>
       </ScrollView>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30, 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
