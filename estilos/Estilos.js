// COMO é uma pasta de estilos para serem exportados não precisa de 
//React - precisamos somente do StyleSheet do react-native
//import React from "react";
import {StyleSheet} from 'react-native';

//Posso omitir o nome da função--comp1
export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        
         },

         textoCurso:{
             color:'#00f',
             fontSize:15,

            },

            textoPadrao:{
                color:'#000',
                fontSize:20,
   
               },

    
            textoTitulo:{
                color:'#f00',
                fontSize:20,
   
               },



});
