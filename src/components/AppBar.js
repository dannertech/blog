import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const AppBar = (props) => {
    const {name} = props;
    const {goBack} = props;
    return (
        <View style={styles.mainView}>
            <IconButton style={{marginTop: 15}} icon={props => <Icon name={name} {...props} style={{color:'white'}}/>} onPress={() => goBack()}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(110,42,232)',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingTop: 20
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        marginRight: 20,
    }
})

export default AppBar;