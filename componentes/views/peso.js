import React from "react";
import { StyleSheet,  View, Text, TextInput} from 'react-native';



//Vamos ter que passar props que esse componente esta relacionado
export default props=>{
    return (
        <View style={estilos.bloco} >
        <Text>Informe seu Peso</Text> 
        <TextInput  style={estilos.txt}
        autoFocus={true}
        keyboardType={'numeric'}
         //value={peso}
        //Passaar o valor digtado para a caixa de texto atraves de uma arrayfunction 
        //onChangeText={text=>setPeso(text)}
        //RECEBER o valor por propriedade da views App.js enttão temos que capturar por (props) antes da propriedade aoModificar
        
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
