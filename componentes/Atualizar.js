import React, {useState} from 'react';
import {View, TextInput, Text, ScrollView, RefreshControl } from 'react-native';

export default function(){
    // Vamos criar o state para indicar se o compomente esta atualizando ou não
const [atualizando, setAtualizando]=useState(false)
    //  criar uma função para poder atualizar (mudar de state)- se fosse arrayfuction SERIA ASSIM
    //const aoAtualizar=()=>{ ---O RESTO
    //  pode ser arrayfuction , MAS VAMOS FAZER UMA FUNçÂO NORMAL
    function aoAtualizar(){
        setAtualizando(true); //EStou atualizando, pois agora state atualizar é TRUE, --uso ponto e virgula opcional
        // Ao atualizar fazer a seguinte rotina (pode ser qulquer rotina)
        // como não tenho nada para fazer , vou so mostrar o referescontrole atraves de um setTimeout numa arrayfunction
        // depois de 3 segundo o setAtualizando fica false
        setTimeout(() => {setAtualizando(false)}, 3000     
        );

    }

    return (
    <View style={{flex:1}}>
        
        <ScrollView style={{backgroundColor:'#333', padding:15,}}
        // DENTRO DO ScrollView vamos colocar a propiedade  RefreshControl e dentro da propieddade
        // VAMOS COLOCAR NOSSO COMPONENTES RefreshControl
                     RefreshControl={
                     <RefreshControl
                     // Passar o valor do state atualizar e ver se ele esta atualizando ou não
                     refreshing={atualizando}
                     // Ao atualizar executar função
                     onRefresh={aoAtualizar}
            
            />
        }

        >
        
            <Text style={{color:'#eee', fontSize:40}}>
            O arcebispo de Pouso Alegre (MG), dom José Luiz Majella Delgado, informou em comunicado que o papa Francisco "dispensou Ernani Maia dos Reis do celibato e de todas as demais obrigações inerentes ao estado clerical e decorrentes das Sagradas Ordens".... - Veja mais em 
            </Text>

        </ScrollView>

    </View>

)}