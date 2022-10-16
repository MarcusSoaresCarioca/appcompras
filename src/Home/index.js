import { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View, TextInput, StatusBar, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemAnimado = Animatable.createAnimatableComponent(TouchableOpacity);
const ImagemAnimada = Animatable.createAnimatableComponent(Image)
export default function Revisao() {
  const [nomeProd, setNomeProd] = useState(null)
  const [preco, setPreco] = useState(null)
  const [lista, setLista] = useState([])
  const [stateModal, setStateModal] = useState(false)

  useEffect(() => {
    async function CarregarLista() {
      const listaStorage = await AsyncStorage.getItem('@lista')
      if (listaStorage) {
        setLista(JSON.parse(listaStorage))
      }
    }
    CarregarLista()

  }, [])

  useEffect(() => {
    async function SalvarLista() {
      await AsyncStorage.setItem('@lista', JSON.stringify(lista))
    }

    SalvarLista()

  }, [lista])

  function Inserir() {
    if (nomeProd !== "" && nomeProd !== null) {
      const item = lista.find(r => r.nome === nomeProd)
      if (!item) {
        setLista((arr) => [...arr, { id: Math.random(2), nome: nomeProd }])
        setStateModal(false)
      } else {
        alert("Já tem esse produto na lista")
      }
    } else {
      alert("Digite um nome do produto!!!")
    }
    setNomeProd(null)
  }

  function Selecionar(id) {
    const item = lista.find(r => r.id === id)
    setNomeProd(item.nome);
    setStateModal(true);
  }

  function excluir (id){
    const novaLista = lista.filter(r => r.id !== id);
    setLista(novaLista);
    if (novaLista.length === 0) {
      setNomeProd(null)
      alert("Finalizado")
    }
  }

  function somar (){
      if(preco !== null && preco !== ""){

      }
      
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.divImg}>
        <ImagemAnimada animation='fadeInLeft' duration={4000} style={styles.imgTopo} source={require('../assets/img/img.png')} />
      </View>

      <TouchableOpacity style={styles.btnAbrirModal} onPress={()=> setStateModal(true)}>
        <Ionicons name="add" size={50} color="#fff" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={stateModal}>
        <View style={styles.containerModal}>
          <View style={styles.divTopoModal}>
            <Text style={styles.txtTopoModal}>Inserir Produto</Text>
          </View>
          <View style={styles.divFormModal}>
            <View style={styles.divEntrada}>
              <TextInput
                style={styles.input}
                placeholder='Produto'
                value={nomeProd}
                onChangeText={setNomeProd}
              />

              <TouchableOpacity style={styles.btnAdd} onPress={Inserir}>
                <Ionicons name="add" size={50} color="#fff" />
              </TouchableOpacity>

            </View>
          </View>

          <View style={styles.divFooterModal}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => setStateModal(false)}>
              <Ionicons name="arrow-back" size={50} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        style={{ width: '100%'}}
        data={lista.sort((a, b) => {
          let x = a.nome
          let y = b.nome
          return x == y ? 0 : x > y ? 1 : -1
        })}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <ItemAnimado
              style={styles.itemProd}
              onPress={() => Selecionar(item.id)}
              animation='bounceIn'
              duration={2000}
              useNativeDriver>
                <Text style={styles.txtProd}> 
               <FontAwesome name="remove" size={40} color="red" onPress={() => excluir(item.id)} /> </Text>

               <Text style={styles.txtProd}> 
               {item.nome}</Text>

               <TextInput
                placeholder='Preço' 
                style={styles.inputList}
                value={preco}
                onChangeText={setPreco}
                keyboardType={'numeric'}></TextInput>
               
            </ItemAnimado>
          )
        }}

      />

      <View style={styles.total}>
        <Text style={styles.txtTotal}>O Total da sua compra foi:</Text>
      </View>

    </View>
  );
}

