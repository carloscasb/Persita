import React from "react";
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native';
//Importa os componentes necessarios - Não precisa ser o mesmo nome (Usei C1) e usa no return
//import Caixas from './componentes/comp1' 
import Caixas from './componentes/Caixas' 
import Estilos from './estilos/Estilos.js';


const dobro=n=>n*2
const soma=(n1,n2)=>n1+n2

/*
function fexibir(vp1){
  if (vp1){
        return(<Text>Vou aparecer ou não</Text>)

  }else{
    return(<Text>------</Text>)
  }
}
*/
/*  PODER SER ARRAYfunction
const fexibir = (vp1) =>{
  if (vp1){
        return(<Text>Vou aparecer ou não</Text>)

  }else{
    return(<Text>------</Text>)
  }
}
*/

function msg(){
   Alert.alert ('MSG','puxando função')
}

export  default  function App1(){
  let fexibir = true;
return(
  <View style={Estilos.conteiner}>
    <Button
      title="mostrar mensagem"
      //Sua funcionalidade, no caso chamamos uma array fuction de alerta
      onPress={()=>Alert.alert ('MSG','aprendendo a persitir')}
    />
    <Button
      title="Puxar função"
      //Sua funcionalidade, no caso chamamos uma array fuction de alerta
      onPress={msg}
    />
   <Image source={require('./assets/hdc8.png')}
    style={{ width: 250, resizeMode:'stretch' }}
   />
   <Text> {dobro (2)}</Text>
   <Text> {soma (2,4)}</Text>
    <Caixas exibir={fexibir} />
    <Text style={Estilos.textoPadrao}>Vai dar tudo Certo</Text>
    <Text style={Estilos.textoTitulo}>Com a bença do Senhor</Text>
    {fexibir?<Text>Vou aparecer ou não</Text>:<Text>------</Text>}
    {fexibir && <Text>Vou aparecer ou não</Text>}
    </View>
    
);
};

