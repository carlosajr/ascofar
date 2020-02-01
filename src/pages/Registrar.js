import React, { Component } from 'react';
import {View, StyleSheet, Image, TextInput, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from '../styles/Registrar';
import api from '../services/Api';

export default class Registrar extends Component{

  state = {
    nome:"",
    endereco:"",
    bairro:"",
    telefone:"",
    cidade:"",
    datanasc:"",
    aposentado:"",
    toma_medicamento:"",
  }

  formulario = async () => {
    const { nome, endereco, bairro, telefone, cidade, datanasc, aposentado, toma_medicamento } = this.state;
    
    
    var params = new URLSearchParams();
    //params.append('logar', true);
    params.append(nome);
    params.append(endereco);
    params.append(bairro);
    params.append(telefone);
    params.append(cidade);
    params.append(datanasc);
    params.append(aposentado);
    params.append(toma_medicamento);
  
    api.post('api/login.php?', params)
      .then(async function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
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

        <ScrollView>
        <View style={styles.body}>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          onChangeText={ nome => this.setState({ nome }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          onChangeText={ endereco => this.setState({ endereco }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={ bairro => this.setState({ bairro }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          onChangeText={ telefone => this.setState({ telefone }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={ cidade => this.setState({ cidade }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          onChangeText={ telefone => this.setState({ telefone }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          onChangeText={ datanasc => this.setState({ datanasc }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Aposentado"
          onChangeText={ aposentado => this.setState({ aposentado }) }
        />
        <TextInput
          style={styles.input}
          placeholder="Toma algum medicamento?"
          onChangeText={ toma_medicamento => this.setState({ toma_medicamento }) }
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={ () => {this.formulario()} }
        >
          <Text style={styles.botaoText}>Enviar</Text>
        </TouchableOpacity>

      </View>
        </ScrollView>
        
      </View>
    )
  }
}