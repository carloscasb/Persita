import React from "react";
import { StyleSheet,  View, Text, TextInput} from 'react-native';



//Vamos ter que passar props que esse componente esta relacionado
export default props=>{
    return (
        <View style={estilos.bloco} >
        <Text>Informe Sua altura</Text> 
        <TextInput style={estilos.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        // value={altura}
        //Passaar o valor digtado para a caixa de texto atraves de uma arrayfunction (propriedade  onChangeText)
        // o texto digitado alterar o state (muda o valor do estado)
        onChangeText={text=>props.aoModificar(text)}
        ></TextInput>  
        </View>

    )

}

const estilos = StyleSheet.create({
      bloco:{
      marginBottom:20
    },
  
    txt:{
      width:'100%',
      borderWidth:1,
      borderColor:'#000',
      borderRadius:20,
      padding:10
        }
  
     
        
   });
