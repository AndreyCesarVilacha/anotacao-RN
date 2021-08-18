import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  //=======================Hooks=========================
  const [estado,setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('Clique no botão \' + \' para adicionar uma anotação!');

  //=======================Funções=========================
  function atualizarTexto(){
    if(estado == 'leitura'){
      setEstado('atualizando')
    } else{
      setEstado('leitura');
      alert("Anotação salva");
    }
  }

  //Estado da tela para visualizar as anotações
  if(estado == 'leitura'){
    return (
      <View style={{flex:1}}>

        <StatusBar style="light"/>

        <View style={styles.header}>
          <Text style={styles.headerText}>Aplicativo Anotação</Text>
        </View>

        <View style={styles.containerAnotacao}>
          <Text style={styles.anotacao}>{anotacao}</Text>
        </View>

        {
          (anotacao === 'Nenhuma anotação ainda!')?
          <TouchableOpacity 
            style={styles.btnAnotacao}
            onPress={() => setEstado('atualizando')}>
            <Text style={styles.btnAnotacaoIcon}>+</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity 
            onPress={() => atualizarTexto()}
            style={styles.btnSalvar}>
            <Text style={styles.btnSalvarIcon}>Editar</Text>
          </TouchableOpacity>
        } 

      </View>
    );
    //Estado para atualizar as anotações
  } else if(estado == 'atualizando'){
    return(
    <View style={{flex:1}}>

        <StatusBar style="light"/>

        <View style={styles.header}>
          <Text style={styles.headerText}>Aplicativo Anotação</Text>
        </View>

        <TextInput 
          onChangeText={(text)=>setAnotacao(text)} 
          multiline={true} numberOfLines={5} 
          value={anotacao}
          style={styles.textIpnutStyle}/>

        <TouchableOpacity 
          onPress={() => atualizarTexto()}
          style={styles.btnSalvar}>
          <Text style={styles.btnSalvarIcon}>Salvar</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

//=======================Estilos=========================
const styles = StyleSheet.create({
  header:{
    width: '100%',
    padding: 20,
    backgroundColor: '#069',
  },
  headerText:{
    textAlign:'center', 
    color:'white', 
    fontWeight:'bold',
    fontSize: 18,
  },
  containerAnotacao:{
    padding:20
  },
  anotacao:{
    fontSize:14,
  },
  btnAnotacao:{
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 50,
    height:50,
    backgroundColor:'#069',
    borderRadius: 25,
  },
  btnAnotacaoIcon:{
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: '5%',
    fontSize: 30,
  },
  btnSalvar: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 100,
    height:50,
    backgroundColor:'#069',
    borderRadius: 25
  },
  btnSalvarIcon:{
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: '20%',
    fontSize: 20,
  },
  textIpnutStyle:{
    textAlignVertical:'top', 
    height: 300, 
    padding:20,
  },
});