import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../../../../assets/logo.png'
import { carregaTopo } from '../../../servicos/carregaDados'

export default function Topo() {
    const [boasVindas, setBoasVindas] = useState('')
    const [legenda, setLegenda] = useState('')
    
    useEffect(() => {
        const retorno = carregaTopo()
        setBoasVindas(retorno.boasVindas)
        setLegenda(retorno.legenda)
    })
    
    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}></Image>
        <Text style={estilos.boasVindas}>{ boasVindas }</Text>
        <Text style={estilos.legenda}>{ legenda }</Text>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A6A6A6'
    }
})