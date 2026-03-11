import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, View, FlatList, TextInput, TouchableOpacity, Modal } from 'react-native';
import { ScrollView } from 'react-native';


let productos = [
  { nombre: 'Papitas', categoria: '(SNAKS)', precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: 'Chetos', categoria: '(SNAKS)', precioCompra: 0.25, precioVenta: 0.40, id: 101 },
  { nombre: 'Cola', categoria: '(BEBIDAS)', precioCompra: 0.95, precioVenta: 1.10, id: 102 },
  { nombre: 'Pony Malta', categoria: '(BEBIDAS)', precioCompra: 0.75, precioVenta: 0.80, id: 103 },
];

let ItemProductos = (props) => (
  <TouchableOpacity onPress={props.editar}>
    <View style={styles.lista}>

      <Text style={styles.codigo}>
        {props.id}
      </Text>

      <View style={styles.datos}>
        <Text style={styles.nombre}>{props.nombre}</Text>
        <Text style={styles.categoria}>{props.categoria}</Text>
      </View>

      <Text style={styles.precio}>
        {props.precioVenta}
      </Text>

      <View style={styles.botonesFila}>
        <Button title="X" color="red" onPress={props.eliminar} />
      </View>

    </View>
  </TouchableOpacity>
)



export default function App() {

  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [precioCompra, setCompra] = useState();
  const [precioVenta, setVenta] = useState();

  const [editando, setEditando] = useState(false);

  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);

  const [error, setError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [indiceEliminar, setIndiceEliminar] = useState(null);


  let eliminarProducto = (indice) => {
    setIndiceEliminar(indice);
    setModalVisible(true);
  }
  let confirmarEliminar = () => {
    productos.splice(indiceEliminar, 1);
    setModalVisible(false);
    limpiar();
  }

  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setCompra(null);
    setVenta(null);
    setEditando(false);
  }

  let nuevoProducto = () => {

    if (!codigo || !nombre || !categoria || !precioCompra) {
      setError(" Debe completar todos los campos");
      return;
    }

    setError("");

    if (!editando) {

      let producto = {
        id: codigo,
        nombre: nombre,
        categoria: categoria,
        precioCompra: precioCompra,
        precioVenta: precioVenta
      };

      productos.push(producto);

    } else {

      productos[indiceSeleccionado].nombre = nombre;
      productos[indiceSeleccionado].categoria = categoria;
      productos[indiceSeleccionado].precioCompra = precioCompra;
      productos[indiceSeleccionado].precioVenta = precioVenta;

    }

    limpiar();
  }

  let editarProducto = (producto, indice) => {
    setCodigo(producto.id.toString());
    setNombre(producto.nombre);
    setCategoria(producto.categoria);
    setCompra(producto.precioCompra.toString());
    setVenta(producto.precioVenta.toString());

    setIndiceSeleccionado(indice);
    setEditando(true);
  }

  return (

    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.titulo}>PRODUCTOS</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}



        <TextInput
          style={styles.input}
          value={codigo}
          onChangeText={setCodigo}
          placeholder='CODIGO'
          keyboardType="numeric"
          editable={!editando}
        />
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder='NOMBRE'
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          value={categoria}
          onChangeText={setCategoria}
          placeholder='CATEGORIA'
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          value={precioCompra}
          onChangeText={valor => {
            setCompra(valor);

            let venta = parseFloat(valor) * 1.20;

            if (!isNaN(venta)) {
              setVenta(venta.toFixed(2));
            }
          }}

          placeholder='PRECIO DE COMPRA'
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          value={precioVenta}
          placeholder='PRECIO DE VENTA'
          editable={false}
        />
        <View style={styles.botones}>

          <View style={styles.botonCaja}>
            <Button
              title="NUEVO"
              color="darkgrey"
              onPress={limpiar}
            />
          </View>

          <View style={styles.botonCaja}>
            <Button
              title="GUARDAR"
              onPress={() => {
                nuevoProducto();
              }
              }


              color="darkgrey"
            />

          </View>

          <Text style={styles.contador}>Productos: {productos.length}</Text>

        </View>

        <FlatList
          scrollEnabled={false}
          data={productos}
          renderItem={({ item, index }) => (
            <ItemProductos
              id={item.id}
              nombre={item.nombre}
              categoria={item.categoria}
              precioVenta={item.precioVenta}
              editar={() => editarProducto(item, index)}
              eliminar={() => eliminarProducto(index)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
        >

          <View style={styles.modalFondo}>
            <View style={styles.modalCaja}>

              <Text style={styles.modalTexto}>
                ¿Está seguro que quiere eliminar?
              </Text>

              <View style={styles.modalBotones}>
                <Button
                  title="Aceptar"
                  onPress={confirmarEliminar}
                  color="red"
                />
                <Button
                  title="Cancelar"
                  onPress={() => setModalVisible(false)}
                />
              </View>

            </View>
          </View>

        </Modal>
        <View style={styles.pie}>
          <Text>ANGIE MORA</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  titulo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold'

  },
  lista: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ff7a99'
  },
  id: {
    textAlign: 'center'

  },
  input: {

    borderColor: 'gray',
    borderWidth: '2',
    borderRadius: 8,
    paddingHorizontal: '5',
    marginBottom: '10'

  },
  pie: {
    flex: 1,
    backgroundColor: "darkgrey",
    justifyContent: 'space-around',
    alignItems: 'flex-end'

  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20
  },
  botonCaja: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden'
  },
  datos: {
    flex: 1,
    marginLeft: 10
  },

  nombre: {
    fontWeight: 'bold'
  },

  categoria: {
    fontSize: 12,
    color: 'gray'
  },

  precio: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
  },

  botonesFila: {
    flexDirection: 'row',
    gap: 5
  },

  codigo: {
    fontWeight: 'bold'
  },
  contador: {
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: 'bold',
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold"
  },
  modalFondo:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"rgba(0,0,0,0.4)"
},

modalCaja:{
  backgroundColor:"white",
  padding:20,
  borderRadius:10,
  width:250,
  alignItems:"center"
},

modalTexto:{
  fontSize:16,
  marginBottom:20,
  textAlign:"center"
},

modalBotones:{
  flexDirection:"row",
  gap:10
}




});
