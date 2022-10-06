import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './style';


export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.divHeader}>
            <Image style={styles.divImg} source={require("../assets/img/img.png")}></Image>
        </View>

        <View style={styles.divInputs}>

        </View>

        <View style={styles.divLista}>

        </View>
    </View>
  );
}

