import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      paddingHorizontal:50 ,
    },
    videoContainer: {
      padding: 10,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderColor: '#b22222',
      borderRadius: 10,
      backgroundColor:'#000000',
    },
    video: {
      width: 170,
      height: 300,
    },
    btnContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:10
    },
    btnText:{
      // borderColor:'#b22222',
      borderWidth:2,
      borderRadius:10,
      padding:10,
      color:'#fff',
      fontSize:12,
      // backgroundColor:'#b22222'
    },
  });