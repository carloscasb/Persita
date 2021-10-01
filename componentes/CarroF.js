import React, { useState } from "react";
import {Switch, View, Text, ProgressViewIOSComponent} from 'react-native';


// Não usa o this.props
//O ligado vai vim do state (-VERIFICA SE ESTA LAGADO OU NÃO )-----props.nome do CARRO --
 
export default function(props) {
  useState
    const [ligado, setLigado] = useState(false)
    const toggleLigado=()=>{setLigado(!ligado)} //pode usar o PrevesState -> !PrevesState
 
        return (
                <View>
                <Text > Carro:{props.nome}  -  Ligado:{ligado? "Sim" : "Não"} </Text>
                <Switch
                  // Definir cor
                  trackColor={{false:"#777", true:"#8bf"}}
                   thumbColor={ligado? '#00f' :'#444' }
                   // Definir Estado ---como ligado ta true --ele vai ligar
                   // Se mudar para false - muda 
                   value={ligado}
                   // AGORA MUDA O ESTADO (evento) - vamos mudar de acordo com o clique no switch 
                   //FAz atraves de uma array function
                   onValueChange={
                     // SERIA ISSO ----()=>{setLigado(!ligado)}
                     // vamos fazer por uma função que condiciona (la em cima) a toggleLigado e USAR
                     toggleLigado

                   }



                />
                 </View>
        )
  }

