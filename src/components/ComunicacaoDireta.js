/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const fonte =  {style: {fontSize: 30}};
const filhosComProps = (props) => {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props})
    )
}

export const Filho = ({nome, sobrenome}) => {
    return (
        <View>
            <Text {...fonte}>Filho: {nome} {sobrenome}</Text>
        </View>
    )
};

export const Pai = ({nome, sobrenome, children}) => {
    return (
        <View>
            <Text {...fonte}>Pai: {nome} {sobrenome}</Text>
            {
                filhosComProps({nome, sobrenome, children})
            }
        </View>
    )
};

export const Avo = ({nome, sobrenome}) => {
    return (
        <View>
            <Text {...fonte}>Avô: {nome} {sobrenome}</Text>
            <Pai nome='Cleones' sobrenome={sobrenome}>
                <Filho nome="Renata"/>
                <Filho nome="Carlos"/>
                <Filho nome="Dany"/>
            </Pai>
            <Pai nome='Janio' sobrenome={sobrenome}>
                <Filho nome="Kelly"/>
                <Filho nome="João"/>
            </Pai>
        </View>
    )
};


const ComunicacaoDireta = () => {
  return (
    <View />
  );
}
export default ComunicacaoDireta;