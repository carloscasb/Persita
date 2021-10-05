import React from "react";
import { View } from 'react-native';


//Posso omitir o nome da função--comp1
export default function (props){

    return (
      <View style={{width:'100%', height:300, flexDirection:'column', justifyContent:'space-between'}}>

        {
      props.exibir ?
          <View style={{flex:1,}}>
          <View style={{ flexGrow:1 , backgroundColor:'#0ff'}}></View>
          <View style={{ flexGrow:1 , backgroundColor:'#f00'}}></View>
          <View style={{ flexGrow:1 , backgroundColor:'#00f'}}></View>
          </View>
          :
          <View style={{flex:1,}}>
          <View style={{ flexGrow:1 , backgroundColor:'#0ff'}}></View>
          <View style={{ flexGrow:1 , backgroundColor:'#f00'}}></View>
          <View style={{ flexGrow:1 , backgroundColor:'#000'}}></View>
          </View>
        }

      </View>
    );
}

