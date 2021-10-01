import { isTemplateElement } from "@babel/types";
import React from "react";
import {StyleSheet, View, Text, FlatList} from 'react-native';

// CRIAR uma array Produtos
const Produtos = [
    {
      id:'001',
      desc:['mouse', '25.00']
    },
    {
    id:'002',
    desc:['teclado', '35.00']
    },
    {
    id:'003',
    desc:['monitor', '50.00']
    },
    
    ]

export default function (){

return (
    <View>
        <FlatList

        // DE ONDE VEM OS DADOS
            data={Produtos}
        // A chave que queremos pegar (id), pega numa array function
        keyExtractor={item=>item.id}
        // E pegar as descrições que são uma array, posição 0 e posição 1 --- pegar (desc), pega numa array function
        // Usamos parentes pois tem mais de 1 e retorne um text, contendo a descrição e o valor do produto
        renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]} </Text></View>}

        />

    </View>

)}

const estilos = StyleSheet.create({
    item:{

     backgroundColor:'#a0f',
     padding:15,
     marginVertical:8,
     marginHorizontal:16
      
       },
       prod:{

      fontSize:20,
      color:'#fff'
         
          }
     
    });
  