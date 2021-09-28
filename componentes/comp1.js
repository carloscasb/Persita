import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import Estilos from '../estilos/Estilos.js';

//Posso omitir o nome da função--comp1
export default function (props){

    return (
        <Text style={Estilos.textoCurso}>Nossos aninais: {props.curso} Nota - {props.nota}</Text>

    );
}

