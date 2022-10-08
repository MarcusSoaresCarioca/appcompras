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
        width:200,
        height:200
    },

    divInputs:{
        flex:1.6,
        flexDirection:'row',

    },

    divInput:{
        flex:1,
        backgroundColor:'#0107FF',
        alignItems:'center',
        justifyContent:'center',
        
    },

    input:{
        backgroundColor:'#fff',
        width:200,
        height:50,
        borderRadius:20,
        paddingLeft:60,
        fontSize:20,
        margin:4
        
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
        borderRadius:50,
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

    divFastList:{
        borderRadius:20,
        backgroundColor:"#5198FF",
        width:"97%",
        height:60,
        marginLeft:5,
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10,
        flexDirection:'row'
    },

    txtLista:{
        fontSize:26,
        color:"#fff",
    },

    

    

})

export default styles