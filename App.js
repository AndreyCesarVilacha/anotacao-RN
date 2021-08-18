import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  //=======================Hooks=========================
  const [estado,setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec. Fames ac turpis egestas sed tempus. Fermentum iaculis eu non diam phasellus. Odio aenean sed adipiscing diam. Feugiat in fermentum posuere urna nec tincidunt praesent. Commodo nulla facilisi nullam vehicula. Ullamcorper eget nulla facilisi etiam. Lacus vel facilisis volutpat est. Est lorem ipsum dolor sit amet consectetur adipiscing. Suspendisse potenti nullam ac tortor vitae. Sed risus pretium quam vulputate dignissim suspendisse in. Tellus mauris a diam maecenas sed enim ut sem viverra. Ipsum consequat nisl vel pretium lectus quam id. Nunc sed id semper risus. Non curabitur gravida arcu ac tortor. Fermentum dui faucibus in ornare quam viverra.');

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

        <TouchableOpacity 
          style={styles.btnAnotacao}
          onPress={() => setEstado('atualizando')}>
          <Text style={styles.btnAnotacaoIcon}>+</Text>
        </TouchableOpacity>

      </View>
    );
  } else if(estado == 'atualizando'){
    return(
    <View style={{flex:1}}>

        <StatusBar style="light"/>

        <View style={styles.header}>
          <Text style={styles.headerText}>Aplicativo Anotação</Text>
        </View>

        <TouchableOpacity 
          onPress={() => setEstado('leitura')}
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
    fontSize:13,
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
    top: '10%',
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
  }
});