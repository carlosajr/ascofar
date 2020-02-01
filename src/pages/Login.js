import React, { Component } from 'react';
import {View,Text, Image, TextInput, TouchableOpacity, Alert, AsyncStorage, Keyboard} from 'react-native';

import styles from '../styles/Login';

export default class Login extends Component{
  
  state = {
    usuario:"",
    senha:"",
  }

  logar = async () => {
    
    Keyboard.dismiss();

    const { usuario, senha } = this.state;
    
    if(usuario == "" || senha == ""){
      
      Alert.alert("Vida & Saude", "Preencha os Campos");
    
    }else{

      let response = await fetch('https://devcarlos.tk/ascofar/api/login.php?logar=true&usuario='+usuario+'&senha='+senha);
      let responseJson = await response.json();

      if(responseJson.status == "OK"){

        if(responseJson.logado == "true"){
        
          try{
            await AsyncStorage.setItem("ASCOFAR_app_usuario", this.state.usuario)
            await AsyncStorage.setItem("ASCOFAR_app_senha", this.state.senha)

            this.props.navigation.navigate('Home')

          }catch (e){
            alert(e);
          }

        }else{
          Alert.alert("Vida & Saude", "Usuario ou senha incorretos");
        }
      }else{
        Alert.alert("Vida & Saude", "Houve um erro de conexão");
      }

    }

  }
  
  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Usuario"

          value={this.state.usuario}
          onChangeText={ usuario => this.setState({ usuario }) }
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"

          value={this.state.senha}
          onChangeText={ senha => this.setState({ senha }) }
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={ () => {this.logar()} }
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    )
  }
}