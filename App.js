import React from "react";
import {StyleSheet, View, Text} from 'react-native';
//Importa os componentes necessarios - Não precisa ser o mesmo nome (Usei C1) e usa no return
//import Caixas from './componentes/comp1' 
import Caixas from './componentes/Caixas' 
import Estilos from './estilos/Estilos.js';


function fexibir(vp1){
  if (vp1){
        return(<Text>Vou aparecer ou não</Text>)

  }else{
    return(<Text>------</Text>)
  }
}

/*  PODER SER ARRAYfunction
const fexibir = (vp1) =>{
  if (vp1){
        return(<Text>Vou aparecer ou não</Text>)

  }else{
    return(<Text>------</Text>)
  }
}
*/

export  default  function App1(){
return(
  <View style={Estilos.conteiner} >
    <Caixas/>
    <Text style={Estilos.textoPadrao}>Vai dar tudo Certo</Text>
    <Text style={Estilos.textoTitulo}>Com a bença do Senhor</Text>
    {fexibir (true)} 
    </View>
);
};

