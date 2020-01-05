import React from 'react';
import {View, Button, Alert, ToastAndroid,Platform,StyleSheet} from 'react-native'

// eslint-disable-next-line react/prop-types
const Platamormas = () => {
    return (
        <View  style={styles.contatiner}>
            <Button
                title='testeMsg'
                onPress={()=> showMsg('ola!!!')}
            />
        </View>
    )
};

const showMsg = (msg) => {
    console.log(Platform.OS,isAndroid());
    if(isAndroid()) {
        return ToastAndroid.show(msg, ToastAndroid.LONG);
    }
    Alert.alert('Informação', msg);
}

const isAndroid = () => Platform.OS === 'android';
const styles = StyleSheet.create({
    contatiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default Platamormas;