import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
const EditScreen = () => {
    return(
        <View>
            <Text>Edit Screen</Text>
            <TextInput placeholder="Post Title"/>
            <Button />
        </View>
    )
};

export default EditScreen;