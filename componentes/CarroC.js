import React, { Component } from "react";
import {Button, View, Text} from 'react-native';


//Carro vai vim pela propriedade----- this.props.Valor da propriedade';
//O ligado vai vim do state----- this.props.ESTADO DO STATE ---VERIFICA SE ESTA LAGADO OU NÃO 


export default class Carro extends Component {
    state={
        ligado:true  //Pode ser mais de uma estado
    }


  render(props){  //Trabalhando co classe nunca esquecer do render e nesse caso vai passar propriedade
        result (
                <View>

            
            <Text >{props.nome}  -  Ligado:{this.state.ligado ? "Sim" : "Não"} </Text>
                <Button
                  // tanto o texto e button vai verificar o (state) estado ligado ? ai responde conforme o state
                  title={this.state.ligado ? "Desligado" : "ligar"}  
                 onPress={
                        ()=>{this.setState({ligado:!this.state.ligado})}

                 }
                />
                 </View>


        )
  }

}