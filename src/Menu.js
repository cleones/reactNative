/* eslint-disable react/display-name */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import {Inverter, MegaSena} from './components/Multi';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Contatodor from './components/Contador';
import Platamormas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import { Avo } from './components/ComunicacaoDireta';
import { TextoSincronizado } from './components/ComunicacaoIndireta';
import ListaFlex from './components/ListaFlex';
import Flex from './components/Flex';

const stack = createDrawerNavigator(
  {
    Flex: {
      screen: () => <Flex/>,
      navigationOptions: {title: 'Lista Flex box'}
    },
    ListFlex: {
      screen: () => <ListaFlex/>,
      navigationOptions: {title: 'Lista Flex box'}
    },
    ComunicacaoIndireta: {
      screen: () => <TextoSincronizado></TextoSincronizado>,
      navigationOptions: {title: 'Comunicacao indireta'}
    },
    ComunicacaoDiretra: {
      screen: () => <Avo nome="Joka" sobrenome="Rapoza"/>,
      navigationOptions: {title: 'Comunicacao direta'}
    },
    Evento: {
      screen: () => <Evento/>,
      navigationOptions: {title: 'Evento'}
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={19}/>, 
      navigationOptions: {title: 'Validar Props'}
    },
    Plataformas: {
      screen: () => <Platamormas/>,
      navigationOptions: {title: 'Plataformas'},
    },
    Contador: {
      screen: () => <Contatodor  initial={10}/>,
      navigationOptions: {title: 'Contador'},
    },
    Inverter: {
      screen: () => <Inverter texto="Texto Invertio" />,
      navigationOptions: {title: 'Inverter'},
    },
    MegaSena: {
      screen: () => <MegaSena quantidade={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    ParImpar: {
      screen: () => <ParImpar numero={15} />,
      navigationOptions: {title: 'Par & Impart'},
    },
    Simples: {
      screen: () => <Simples name="Simples texto" />,
    },
  },
  {drawerWidth: 300,drawerType: 'slide'},
);

const Menu = createAppContainer(stack);
export default Menu;
