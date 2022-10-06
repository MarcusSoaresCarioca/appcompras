import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    divHeader:{
        flex:4,
        alignItems:'center',
        justifyContent:'center'
    },

    divImg:{
        width:170,
        height:170
    },

    divInputs:{
        flex:1,
        flexDirection:'row',
    },

    divInput:{
        flex:1,
        backgroundColor:'#0107FF',
        alignItems:'center',
        justifyContent:'center'
    },

    input:{
        backgroundColor:'#fff',
        width:150,
        height:50,
        borderRadius:20,
        
    },

    divBtn:{
        flex:0.5,
        backgroundColor:'#0107FF',
        alignItems:'center',
        justifyContent:'center'
    },

    btn:{
        width:50,
        height:50,
        borderRadius:20,
        backgroundColor:'#5198FF',
        alignItems:'center',
        justifyContent:'center'
    },

    divLista:{
        flex:6,
        backgroundColor:'#0107FF',
        borderTopColor:'#fff',
        borderTopWidth:5
    },

})

export default styles