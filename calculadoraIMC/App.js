import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [estatura,setEstatura]=useState();
  const [peso,setPeso]=useState();
  const [resultado,setResultado]=useState("");

  const calcularIMC = () => {

  let estaturaNum = parseFloat(estatura);
  let pesoNum = parseFloat(peso);

  let estaturaMetros = estaturaNum / 100;

  let imc = pesoNum / (estaturaMetros * estaturaMetros);

  setResultado(imc.toFixed(2));

}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMG</Text>

      <Text> ESTATURA </Text>
      <TextInput
     
      style={styles.caja}
      value={estatura}
      onChangeText={setEstatura}
      placeholder='Ingresa tu estatura en centimetros'
      
      />
       <Text> PESO </Text>
      <TextInput
      style={styles.caja}
      value={peso}
      onChangeText={setPeso}
       placeholder='Ingresa tu peso en kilogramos'
      />


      <Button 
      title='ok'
      onPress={calcularIMC}
      />
      <Text>Tu IMC es: {resultado}</Text>

      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  caja:{
    borderColor:'gray',
    borderWidth:'5',
    paddingHorizontal:'10',
    marginBottom:'10'    
  },

  titulo:{
    fontSize:'16',
    textAlign:'center',
    margin:'15'

  }



});
