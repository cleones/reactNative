import React from 'react';
import {Button, View} from 'react-native';
import { withNavigation } from 'react-navigation';

// eslint-disable-next-line react/prop-types
const Inicial = ({ navigation}) => {
  return (
    <View style={{flex:1}}>
      <Button 
        title="drawer"
        onPress={()=> navigation.toggleDrawer()}
      />
    </View>
  );
};

export default withNavigation(Inicial);
