import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/padrao';

// eslint-disable-next-line react/prop-types
export const Inverter = ({texto}) => {
    const inv = texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>
}
// eslint-disable-next-line react/prop-types
export const MegaSena = ({quantidade = 6 }) => {
    const [min, max] = [1, 60];
    const numeros = Array(quantidade).fill(0);
    for(let i = 0, j = numeros.length; i < j; i++)
    {
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        numeros[i] = novo;
    }
    numeros.sort((a,b) => a - b);
    return <Text style={Padrao.ex}>{numeros.join(',')}</Text>
}