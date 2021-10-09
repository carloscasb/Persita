import React,{useState,useEffect} from 'react';
//import config from "../config/config.json";
import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import css from "../css/Css";
import Home from './Home';

export default function Cadastro({navigation}) {
    // CRIAR state
    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [email,setEmail]=useState(null);

    //Envia os dados do formulário para o backend
    async function registerUser()
    {
        let reqs = await fetch(config.urlRootNode+'create',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password,
                emailUser: email
            })
        });
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={css.container}>
           
                <View style={css.header}>
                    <Image style={css.header__img} source={require('../../assets/imagens/gasolina.png')} />
                </View>

                <View style={css.footer}>
                    <TextInput
                            style={css.input}
                            placeholder="Digite seu nome"
                            //MODIFICAR TEXTO
                            onChangeText={(text)=>setUser(text)}
                    />

                    <TextInput
                            style={css.input}
                            placeholder="Digite seu email"
                            //MODIFICAR TEXTO
                            onChangeText={(text)=>setEmail(text)}
                    />

                    <TextInput
                            style={css.input}
                            placeholder="Digite a senha:"
                            secureTextEntry={true}
                            //MODIFICAR TEXTO
                            onChangeText={(text)=>setPassword(text)}
                    />

                    <TouchableOpacity style={css.button} onPress={registerUser}>
                        <Text style={css.button__text}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}