import React, { Component } from 'react';
import {View, Picker, StyleSheet, Image, TextInput, Text, ScrollView, TouchableOpacity, CheckBox } from 'react-native';

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
    params.append('registrar', true);
    params.append('nome', nome);
    params.append('endereco', endereco);
    params.append('bairro',bairro);
    params.append('telefone',telefone);
    params.append('cidade',cidade);
    params.append('datanasc',datanasc);
    params.append('aposentado',aposentado);
    params.append('toma_medicamento',toma_medicamento);
  
    api.post('api/registrar.php?', params)
      .then(async function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  renderInputField() {
    if(this.state.doenca === 'Sim'){
      return (
        <TextInput
          style={styles.input}
          placeholder="Doença"
          onChangeText={ doenca => this.setState({ doenca }) }
        />
        
      )
    }
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
          placeholder="Data de Nascimento"
          onChangeText={ datanasc => this.setState({ datanasc }) }
        />
        <View style={styles.picker}>
          <Text>Aposentado?</Text>
        <Picker
  selectedValue={this.state.aposentado}
  style={{height: 50, width: 100}}
  onValueChange={(aposentado, itemIndex) =>
    this.setState({aposentado: aposentado})
  }>
  <Picker.Item label="" value="" />
  <Picker.Item label="Sim" value="Sim" />
  <Picker.Item label="Não" value="Não" />
</Picker>
</View>

<View style={styles.picker}>
          <Text>Toma algum medicamento?</Text>
<Picker
  selectedValue={this.state.doenca}
  style={{height: 50, width: 100}}
  onValueChange={(toma_medicamento, itemIndex) =>
    this.setState({doenca: toma_medicamento})
  }>
  <Picker.Item label="" value="" />
  <Picker.Item label="Sim" value="Sim" />
  <Picker.Item label="Não" value="Não" />
</Picker>
</View>
        {this.renderInputField()}
        
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