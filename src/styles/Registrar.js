import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"stretch",
      backgroundColor: "#F2F2F2",
    },
    topBar: {
      marginTop: 0,
      height: 70,
      backgroundColor: "#be152c",
      alignItems:"center",
    },
    body: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",

    },
    logo: {
      width: 200,
      height: 60,
      marginBottom:50,
  },
  loadText: {
      fontSize: 16,
      color: "#FFF",
      fontWeight: "bold",
      marginTop:10,
  },
    input: {
      marginTop: 10,
      width: 300,
      backgroundColor: "#fff",
      borderRadius: 30,
      paddingLeft:10,
      fontSize: 16,
    },
    botao: {
      marginTop: 10,
      width: 300,
      height: 45,
      borderRadius: 30,
      backgroundColor: "#8f376a",
      paddingLeft:20,
      fontSize: 16,
      justifyContent:"center",
      alignItems:"center",
    },
    botaoText: {
      fontSize: 16,
      color: "#FFF",
      fontWeight: "bold",
    }
  });

  export default styles;