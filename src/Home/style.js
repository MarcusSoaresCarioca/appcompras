import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divImg: {
      height: 200,
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: "#fff"
    },
    imgTopo: {
      width: 200,
      height: 200,
      marginLeft: -50
    },
    divEntrada: {
      height: 80,
      width: "100%",
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-around',
      borderBottomWidth: 2, 
      borderBottomColor: "#fff",
          
    },
    input: {
      fontSize: 28,
      width: 250,
      height: 60,
      borderRadius: 20,
      backgroundColor: "#fff",
      textAlign: 'center'
    },
    btnAdd: {
      width: 60,
      height: 60,
      backgroundColor: '#2C87BF',
      borderRadius: 72 / 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemProd: {
      borderRadius: 20,
      width: "90%",
      height: 60,
      flexDirection: 'row',
      backgroundColor: "#2C87BF",
      marginTop: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
      alignSelf:'center'
    },
    txtProd: {  
      fontWeight: '800',
      textAlign: 'center',
      fontSize: 26,
      color: '#fff',
      height:40
    },
    containerModal:{
      flex:1,
      
    },
    divTopoModal:{
      height:100,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    },
    divFormModal:{
      height:150,
      backgroundColor:'#070575',
      borderTopRightRadius:30,
      borderTopLeftRadius:30
    },
    divFooterModal:{
      flex:1,
      backgroundColor:'#070575',      
    },
    btnVoltar:{ 
      width: 60,
      height: 60,
      backgroundColor: '#2C87BF',
      borderRadius: 72 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      right:20,
      bottom:20,    
      
    },
    txtTopoModal:{
      fontSize:30
    },
    btnAbrirModal:{
      width: 60,
      height: 60,
      backgroundColor: '#2C87BF',
      borderRadius: 72 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      top:130,
      right:20, 
    }

  });

  export default styles;
  