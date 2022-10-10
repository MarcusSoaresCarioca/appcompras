import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



export default function Home() {

  const [produtos, setProdutos] = useState(null);
  const [lista, setLista] = useState([]);

  function adicionar() {

    if (produtos !== null && produtos !== '') {
      const item = lista.find(r => r.nome === produtos)
      if (!item) {
        let numeroAl = 50 * Math.random(2)
        setLista((arr) => [...arr, {
          id: numeroAl,
          nome: produtos,
        }])
        setProdutos(null);
      }
      else {
        alert("Ja tem esse Produto na sua lista")
      }
    } else {
      alert('Digite um nome do produto')
    }

  }

  function deletar (){
    setLista(null)
  }

  function selecionar(id) {
    const item = lista.find(r => r.id === id)
    setProdutos(item.nome)
    const novaLista = lista.filter(r => r.id !== id)
    setLista(novaLista)
    if (novaLista.length === 0) {
      alert('Finalizado')
      setProdutos(null)
    }
    else {
      setProdutos(item.nome)
    }
  }

 


  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.divHeader}>
        <Image style={styles.divImg} source={require("../assets/img/img.png")}></Image>
      </View>

      <View style={styles.divInputs}>
        <View style={styles.divInput}>
          <TextInput style={styles.input}
            placeholder='Produtos'
            value={produtos}
            onChangeText={setProdutos}
            keyboardType='default'>
          </TextInput>
        </View>

        <View style={styles.divBtn}>
          <TouchableOpacity style={styles.btn} onPress={adicionar}>
            <AntDesign name="plus" size={25} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={deletar}>
            <MaterialCommunityIcons name="delete" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divLista}>
        <FlatList
          style={{ width: '100%' }}
          data={lista.sort((a, b) => {
            let x = a.nome
            let y = b.nome
            return x == y ? 0 : x > y ? 1 : -1
          })}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <Animatable.View animation='flipInX' iterationCount={1}>
              <TouchableOpacity style={styles.divFastList} onPress={() => selecionar(item.id)}>
                <AntDesign name="minuscircleo" size={30} color="#EBA456" />
                <Text style={styles.txtLista}>{item.nome}</Text>
    
              </TouchableOpacity>
              </Animatable.View>



            )
          }}>
        </FlatList>
      </View>
    </View>
  );
}

