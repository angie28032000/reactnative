import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
            <Button   title='X' />
            <Button   title='Y' />
            <Button   title='Z' />
      </View>
      <View style={styles.container3}>
        <View style={styles.container5}>
          <View style={styles.container7}>
            <Button   title='Boton 1' />
            <Button   title='Boton 2' />

          </View>
          <View style={styles.container8}>
            <Button   title='Operacion 1' />
            <Button   title='Operacion 2' />
            <Button   title='Operacion 3' />
          </View>
        </View>
        <View style={styles.container6}>
            <Button   title='accion 1' />
            <Button   title='accion 2' />
        </View>
      </View>

      <View style={styles.container4}>
        <Button   title='Boton final ' />
      </View>
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection:'column'
  },
  container2: {
    flex: 1,
    backgroundColor: 'turquoise',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },

  container3: {
    flex: 6,
    backgroundColor: 'green',
    flexDirection:'column'
  },

  container4: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  container5: {
    flex: 4,
    backgroundColor: 'orchid',
    flexDirection:'row'
  },
   container6: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },
   container7: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection:'colum',
    justifyContent:'space-around',
    alignItems:'stretch '
  },
   container8: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'colum',
    justifyContent:'center',
    alignItems:'flex-start'
  },

   container00: {
    flex: 2,
    backgroundColor: 'purple',
    flexDirection:'colum',
    justifyContent:'center',
    alignItems:'stretch '

  },
});
