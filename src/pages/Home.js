import React, { Component } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, AsyncStorage, Text, Alert} from 'react-native';

export default class Load extends Component{

  deslogar = async () => {

    await AsyncStorage.removeItem("ASCOFAR_app_usuario");
    await AsyncStorage.removeItem("ASCOFAR_app_senha");

    await this.props.navigation.navigate('Login')

 }

  render() {
    return(
      <View style={styles.container}>
        
        <View style={styles.topBar}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.body}>

          <Text style={styles.loadText}>
              Bem vindo!!
          </Text>

          <TouchableOpacity 
            onPress={ () => {this.deslogar()} }
          >
            <Text style={styles.loadText}>Sair</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={ () => { this.props.navigation.navigate('Registrar') } }
          style={styles.TouchableOpacityStyle}>
          <Image
             source={require('../assets/images/plus.png')}
             style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        
      </View>
    )
  }
}

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
      width: 110,
      height: 35,
      marginTop:15,
      marginBottom:50,
    },
    loadText: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold",
        marginTop:10,
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 60,
      height: 60,
      //backgroundColor:'black'
    },
});