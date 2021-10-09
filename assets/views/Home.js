import React, {useEffect} from "react";
import { StyleSheet,  View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import css from "../css/Css";
import Cadastro from "./Cadastro";
// RECEBE como paramentro o navigation
export default function Home({navigation}) {

  return (
      <View style={css.container}>

          <View style={css.header}>
              <Image style={css.header__img} source={require('../../assets/imagens/hdc8.png')} />
          </View>

          <View style={css.footer}>

              <TouchableOpacity
                      style={css.button}
                      onPress={()=>navigation.navigate('Cadastro')}
              >
                  <Text style={css.button__text}>Cadastro</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}