import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Box from './Box/Box';
import styles from './styles';
import Column from './Tools/Column';
import Row from './Tools/Row';

function Comp() {
    return (
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <Row>
                <Column>
                    <Box>AwA</Box>
                    <Box>EwE</Box>
                    <Box>IwI</Box>
                </Column>

                <Column>
                    <Box>OwO</Box>
                    <Box>UwU</Box>
                    <Box>UnU</Box>
                </Column>
            </Row>

            <Row>
                <Column>
                    <Box>xd</Box>
                    <Box>a</Box>
                </Column>

                <Column>
                    <Box>xd2</Box>
                    <Box>a2</Box>
                </Column>
            </Row>
        </View>
    );
}

export default Comp;