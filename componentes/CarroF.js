import React, { useState } from "react";
import {Button, View, Text} from 'react-native';


// Não usa o this.props
//O ligado vai vim do state (-VERIFICA SE ESTA LAGADO OU NÃO )-----props.nome do CARRO --
 
export default function(props) {
  useState
    const [ligado, setLigado] = useState(true)

        return (
                <View>

            
                <Text > Carro:{props.nome}  -  Ligado:{ligado? "Sim" : "Não"} </Text>
                <Button
                  // tanto o texto e button vai verificar o (state) estado ligado ? ai responde conforme o state
                  title= {ligado?"desligar":"Ligar"}
      onPress={()=>setLigado(!ligado)}   
                />
                 </View>
        )
  }

