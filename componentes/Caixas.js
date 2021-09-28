import React from "react";
import { View } from 'react-native';


//Posso omitir o nome da função--comp1
export default function (props){

    return (
      <View style={{width:'100%', height:300, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{width:50, height:50, backgroundColor:'#0ff'}}></View>
          <View style={{width:50, height:50, backgroundColor:'#f00'}}></View>
          <View style={{width:50, height:50, backgroundColor:'#00f'}}></View>

      </View>
    );
}

