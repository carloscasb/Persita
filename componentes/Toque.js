import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function(){

//para fazer a interação com componentes variaveis  precisamos de uma state
// Noosa state vai ser um contador iniciando com value 0
const [Cont, setCont]=useState(0)
//VAMOS FAZER a array Function  (contar) levar para onPress
const contar=()=>{
    setCont(Cont + 1)
}

return (
    <View >
        <TouchableHighlight style={estilos.botao}
        // para associar com a interalão faremos um evento e criamos uma array fuction
         //(diretamente aqui ou la em cima e chama aqui no EVENTO onPress)
         //VAMOS FAZER LA EM CIMA NA Function e chamar aqui
         onPress={contar}
         underlayColor='#000'
        >
        <Text>America Sport</Text>
        </TouchableHighlight>
        <Text>{Cont}</Text>
      
    </View>

)}
const estilos = StyleSheet.create({
    botao:{
     alignItems:'center',
     backgroundColor:'#ccc',
     padding:15
           
       }
    });
