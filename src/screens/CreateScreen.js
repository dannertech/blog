import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    return(
        <View style={styles.mainView}>
            
            <TextInput placeholder="What's on your mind?" onChangeText={(text) =>setText(text)} 
            leading={() => {
                return(
                    <MaterialCommunityIcons name="brain" size={24} color="black"/>
                )
            }}
            />
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
        marginHorizontal: 40,
        justifyContent: 'center',
        flex: 1,
    }
})

export default CreateScreen;