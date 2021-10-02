import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Modal } from 'react-native';

export default function(){
   //  Precisa definir os states do botão para interagir com algo
const [visivel, setVisivel]=useState(true)

return (
    <View > 
        
        <Modal 
        // O Modal precisa ser formatado por varias opções
          animationType="slide"
          transparent={true}
          visible={visivel} // AQUI passei o valor do "state visivel" (la de cima) para a proprieda visivel
          style={{}}  // Oestilo precisa ser aplicado na View que contem os componentes da Modal 
        >
 
            <View style={estilos.Modal}  >
                <Text style={estilos.texto} >Com a bença do Senhor</Text>
                <Text style={estilos.texto}>Vai dar tudo Certo</Text>
                <Text style={estilos.texto}>Com a bença do Senhor</Text>
            <Button  // BOTÃO FECHAR
             title='Fechar' //  Precisa ser formatado pelo title
             onPress={()=>{setVisivel(false)}}   // Click no fehar ao MODAL desaparece (Invisivel)
            />

            </View>

        </Modal>
        <Button  // BOTÃO Mostrar - Fora da MODAL
             title='Mostrar' //  Precisa ser formatado pelo title
             onPress={()=>{setVisivel(true)}}   // Click no fehar ao MODAL desaparece (Invisivel)
            />
    </View>

);};

// CRIAR UM ESTILO

const estilos = StyleSheet.create({
    Modal:{
     backgroundColor:'#000',
     margin:20,
     padding:20,
     borderRadius:20,
     elevation:10,
      alignItems:'center'
    },
     texto:{color:'#fff',   alignItems:'center'}
    });
  