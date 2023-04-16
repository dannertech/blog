import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Button} from '@react-native-material/core';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    return(
        <View style={styles.mainView}>
            <Text>Create Screen</Text>
            <Text>Enter Blog Post</Text>
            <TextInput placeholder="Enter Post Here" onChangeText={(text) =>setText(text)}/>
            <View style={styles.submitButtonView}>
            <Button title="Add Blog Post" onPress={() => {
                        Context.dispatch({type: 'ADD_POST', payload: `Blog Post #${Context.state.length + 1}`})
                        
                    }} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    submitButtonView: {
        marginVertical: 20,
    },
    mainView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default CreateScreen;