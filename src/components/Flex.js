import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    norte: {
        flex: 1,
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#f4decc',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    sul: {
        flex: 1,
        backgroundColor: '#bf45cc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
      width: 100,
      height: 100,
      backgroundColor: '#f47f61',
      borderRadius: 50
    }
});


const Circulo = () => {
    return <View style={styles.circulo}/>
}

const Flex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo/>
            </View>
            <View style={styles.center}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            <View style={styles.sul}>
                <Circulo/>
            </View>
        </View>
    )
}

export default Flex
