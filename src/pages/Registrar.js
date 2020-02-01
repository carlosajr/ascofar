import React, { Component } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class Registrar extends Component{

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

        </View>
        
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