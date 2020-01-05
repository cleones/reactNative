import React, { useState } from 'react';
import {View, Text, TouchableHighlight} from 'react-native'

// eslint-disable-next-line react/prop-types
const Contatodor = ({initial = 0}) => {
    const [count, setCount] = useState(initial);
    return (
        <View>
            <Text style={{fontSize: 40}}>{count}</Text>
            <TouchableHighlight
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(initial)}
            >
                <Text>Increment/Reset</Text>
            </TouchableHighlight>
        </View>
    )
};

export default Contatodor;