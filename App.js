//import React, {component} from "react";
import React from "react";
import {StyleSheet, View, Text} from 'react-native';
//Importa o componente Não precisa ser o mesmo nome (Usei C1) e usa no return
import C1 from './componentes/comp1' 
import Estilos from './estilos/Estilos.js';
export  default  function App1(){
return(
  <View style={Estilos.conteiner} >
    <C1 curso="Cavalo" nota="10" />
    <C1 curso="gato" nota="10" />
    <C1 curso="cachorro" nota="10" />
    <C1 curso="abelhas" nota="10"/>
    <Text style={Estilos.textoPadrao}>Vai dar tudo Certo</Text>
    <Text style={Estilos.textoTitulo}>Com a bença do Senhor</Text>
    </View>
);
};

