import React, { Component } from 'react';
import {View, StyleSheet, Image, AsyncStorage, Alert} from 'react-native';

export default class Load extends Component{
 
    async componentDidMount() {

        let usuario = await AsyncStorage.getItem("ASCOFAR_app_usuario");
        let senha = await AsyncStorage.getItem("ASCOFAR_app_senha");

        if(usuario === null || senha === null){
            await this.props.navigation.navigate('Login');
        }else{
            await this.props.navigation.navigate('Home');
        }
    }

  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: "#be152c",
    },logo: {
        width: 200,
        height: 60,
        marginBottom:50,
    },
    loadText: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold",
        marginTop:10,
    }
});