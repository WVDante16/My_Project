import React from 'react';
import {Text, View} from 'react-native';
import Box from './Box/Box';
import styles from './styles';

function Comp() {
    return (
        <View style={styles.container}>
            <Box>UwU</Box>
            <Box>OwO</Box>
            <Box>AwA</Box>
        </View>
    );
}

export default Comp;