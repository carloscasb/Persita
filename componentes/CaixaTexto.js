import React, {useState} from 'react';
import {View, TextInput, Text } from 'react-native';

export default function(){

//para fazer a associação da CAIXA DE TEXTO com o nome precisamos de uma state
 // declara um useState e tranformamos num state
 // Inicialmente com um Nome vazio
  const[nome, setNome]=useState("")
 //AGORA pode associar o value do componente CAIXA DE TEXTO ao State
 const mudarNome =()=>{setNome}
return (
    <View>
            <Text >Digite seu Nome:</Text>
            <TextInput
          //EM Line
            style={{borderWidth:1, borderBottomColor:'#000'}}
            //ASSOCIANDO COM O STATE nome (mas não permite edição)---pois esta atrelado ao valor inial que é vazio
            value={nome}
           //Precisamos de um EVENTO --- pode ser uma funcção array fuctiom la em cima e chama aqui no EVENTO 
           //Faremos diretamente aqui Vamos passar um Text para dentro da array fuction
           // e atraves do setNome definir um texto desejado

           onChangeText={text=>setNome(text)}

           //tudo que digitamos vai para o state nome
           
           />

            <Text>Valor digitado vai para state nome: {nome}</Text>
    </View>

)}