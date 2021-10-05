import React, {useState} from "react";
import { StyleSheet,  View, Text} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
//POSO CRIAR QUANTOS STORAGE QUISER
import A_Curso from "@react-native-community/async-storage";

export default function App1(){
  // CRIAR um state curso
const [curso, setCurso]=useState(null)
  // CRIAR uma função (arrayfuction) de Aramzenamento(GRAVAR) com o nome Armazenar, pasando chave e valor
const Armazenar = (chave, valor)=>{
  //ARMAZENA ITEM
  AsyncStorage.setItem(chave, valor)
}
// CRIAR uma função (arrayfuction) com o nome Buscar, para BUSCAR -- Quero um valor atraves de uma chave
const Buscar = async (chave)=>{
  //ESPERAR do meu asynsc storage o retorno desta chave 
   const valor = await AsyncStorage.getItem(chave)
   //COLOCAR O Valor recebido dentro do State curso
   setCurso(valor)
   // OU PODE SER UM return, depende do que quero fazer com o valor
  // return valor

}

 // VAMOS ARMAZENAR (chama a função que criamos --Armazenar ou AsyncStorage.setItem(chave, valor) )
 Armazenar('01', 'React-native')
 Armazenar('02', 'React-Natal')
 Armazenar('03', 'Amazonas')

 // VAMOS BUSCAR
 Buscar('01')

  return (
        // VOU COLOCAR AQUI DENTRO DE UM TEXT
      <View >


      <Text>Curso: {curso}</Text> 
      </View>

  
  );
}


const estilos = StyleSheet.create({

});