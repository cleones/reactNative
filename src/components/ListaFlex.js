/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

// import { Container } from './styles';

const alunos = [
    {id: 1, nome: 'cleones', nota: 7.9},
    {id: 2, nome: 'João', nota: 9.1},
    {id: 3, nome: 'Sandim', nota: 5.9},
    {id: 4, nome: 'Medalha', nota: 7.5},
    {id: 5, nome: 'Carlos', nota: 8.5},
    {id: 6, nome: 'Jose', nota: 9.9},
    {id: 7, nome: 'Renata', nota: 6.7},
    {id: 8, nome: 'Camila', nota: 7.0},
    {id: 9, nome: 'Dany', nota: 9.0},
    {id: 11, nome: 'cleones', nota: 7.9},
    {id: 12, nome: 'João', nota: 9.1},
    {id: 13, nome: 'Sandim', nota: 5.9},
    {id: 14, nome: 'Medalha', nota: 7.5},
    {id: 15, nome: 'Carlos', nota: 8.5},
    {id: 16, nome: 'Jose', nota: 9.9},
    {id: 17, nome: 'Renata', nota: 6.7},
    {id: 18, nome: 'Camila', nota: 7.0},
    {id: 19, nome: 'Dany', nota: 9.0},
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

};

export const Aluno = ({ nome, nota }) => {
    return (
        <View style={itemEstilo}>
            <Text>Nome: {nome}</Text>
            <Text style={{fontWeight: 'bold'}}>Nota: {nota}</Text>
        </View>
      );
}

export const ListaFlex = () => {
    const renderItem = ( { item }) => {
        return <Aluno {...item} />
    }
    return (
        <SafeAreaView>
            <FlatList
                data={alunos}
                renderItem={(renderItem)}
                keyExtractor={(_,index) => index.toString()}
                ho
            />
        </SafeAreaView>
    )
};
export default ListaFlex;