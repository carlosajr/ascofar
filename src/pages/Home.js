import React, { Component } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, AsyncStorage, Text, Alert, ScrollView, ActivityIndicator} from 'react-native';

import api from '../services/Api';

export default class Load extends Component{

  constructor(props) {
    super(props);
    this.state = {isLoading: true, dataSource: []}
  };

  fetchDados = async () => {
    let usuario = await AsyncStorage.getItem("ASCOFAR_app_usuario");
    
    try {
      const response = await api.get("api/listaRegistros.php?usuario="+usuario);
      const responseData = await response.data
      console.log(response)
      this.setState({
        isLoading: false,
        dataSource: responseData,
      })
    } catch (error) {
      Alert.alert(error)
    }
  }

  async componentDidMount () {
    this.fetchDados();
  }

  deslogar = async () => {
    await AsyncStorage.removeItem("ASCOFAR_app_usuario");
    await AsyncStorage.removeItem("ASCOFAR_app_senha");

    await this.props.navigation.navigate('Login')
  }

  enviarPendentes = async () => {
    Alert.alert("Ascofar", "Vai Enviar Pendentes")
  }

  tirarLoad() {
    if(this.state.isLoading == true){
      return (
          <ActivityIndicator size="15" color="#be152c"/>
      )
    }else{
      return (
        <ScrollView>
          {this.state.dataSource.map(dados => (
            <View key={dados.id}>
              <Text>{dados.nome}</Text>
              <Text>{dados.endereco}</Text>
              <Text>{dados.datetime}</Text>
            </View>
          ))}
        </ScrollView>
      )
    }
  }

  render() {
    
    return(
      <View style={styles.container}>
        
        <View style={styles.topBar}>

          
          <Text style={styles.hiddenText}>Sair</Text>

          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />

          <TouchableOpacity 
            onPress={ () => {this.deslogar()} }
          >
            <Text style={styles.loadText}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>

          <View style={styles.grid}>

            <ScrollView>
              <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac neque viverra, porta purus ac, vestibulum sem. Integer non justo id enim tincidunt rutrum non sit amet est. Nulla sit amet posuere nisl, et tempus nisi. Sed sit amet consequat massa. Vivamus sed leo pretium, imperdiet justo nec, viverra mi. In et risus eu tortor mollis tempus ac vitae metus. Donec fringilla ultrices vulputate. Nullam bibendum, nulla sit amet mollis maximus, elit justo ornare nunc, in sollicitudin nisl purus sit amet nulla. Cras fringilla nibh at risus tincidunt sagittis. Vestibulum non arcu sit amet nibh facilisis consectetur vel sit amet mi. Quisque lacus libero, efficitur eget nisl non, aliquet placerat velit. Maecenas eget nisl quis sem mattis hendrerit quis non ante. </Text>
            </ScrollView>

            <TouchableOpacity
              style={styles.botao}
              onPress={ () => {this.enviarPendentes()} }
            >
              <Text style={styles.botaoText}>Enviar Pendentes</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.grid}>
            {this.tirarLoad()}
          </View>

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
      flexDirection:"row",
      justifyContent: "space-around",
    },
    body: {
      flex: 2,
      flexDirection: "column",
      alignItems:"center",

    },
    grid: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
      padding:10,
    },
    botao: {
      marginTop: 10,
      alignSelf: 'stretch',
      height: 45,
      borderRadius: 10,
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
    },
    logo: {
      width: 110,
      height: 35,
    },
    loadText: {
      fontSize: 16,
      color: "#FFF",
      fontWeight: "bold",
    },
    hiddenText: {
      fontSize: 16,
      color: "#be152c",
      fontWeight: "bold",
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