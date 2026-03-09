import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button,TextInput,StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [dolares,setDolares]=useState("");
  const [resultado,setResultado]=useState("");

  const convertirMexicanos = ()=>{
    let res = parseFloat(dolares) * 17;
    setResultado(res + "pesos mexicanos");
  }

   const convertirColombianos = () => {
    let res = parseFloat(dolares) * 4000;
    setResultado(res + " Pesos Colombianos");
  };

  const convertirEuros = () => {
    let res = parseFloat(dolares) * 0.92;
    setResultado(res + " Euros");
  };

  return (
    <View style={styles.container}>
      <Text>Convertidor de monedas</Text>
      <StatusBar style="auto" />
      
      <TextInput
        style={styles.cajaTexto}
        value={dolares}
        onChangeText={setDolares}
      />

      <Button
        title="PESOS MEXICANOS"
        onPress={convertirMexicanos}
      />

      <Button
        title="PESOS COLOMBIANOS"
        onPress={convertirColombianos}
      />

      <Button
        title="EUROS"
        onPress={convertirEuros}
      />

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
