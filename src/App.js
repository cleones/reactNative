import React from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';

const App = () =>  {
    return (
      <View style={styles.contatiner}>
        <Simples name="Rola: teste 1"/>
        <ParImpar numero={15}/>
        <ParImpar numero={16}/>
        <Inverter texto='Rola'/>
        <MegaSena />
      </View>
    )
}

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;