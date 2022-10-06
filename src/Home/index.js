import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';


export default function Home() {

  const [produtos, setProdutos] = useState(null);
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (produtos !== null && produtos !== '') {
      let numeroAl = 50 * Math.random(2)
      setLista((arr) => [...arr, {
        id: numeroAl,
        valor: produtos,
      }])
      setProdutos(null);
    }

    else {
      alert('Preencha o campo')
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
            <AntDesign name="plus" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divLista}>
        <FlatList
          style={{ width: '100%' }}
          data={lista}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={item.tipo === 1 ? styles.itemListaReceita : styles.itemListaDespesa}>
                <Text style={styles.txtTipo}>{item.tipo === 1 ? "Receita" : "Despesas"}</Text>
                <Text style={styles.valorItem}> {item.tipo === 1 ? "R$" : "R$-"}{item.valor}</Text>
              </View>
            )
          }}>


        </FlatList>
      </View>
    </View>
  );
}

