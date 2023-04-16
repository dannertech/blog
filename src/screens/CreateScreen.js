import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BlogContext } from '../context/BlogContext';


const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    const [postSuccess, setPostSuccess] = useState(false);

    const submitPost = () => {
        if(text.length > 5){
            Context.dispatch({type: 'ADD_POST', payload: text})
            setText('');
            alert('success')
        } else {
            null
        }
    }
    return(
        <View style={styles.mainView}>
            {postSuccess && (
               alert("success")
            )}
            
            <TextInput placeholder="What's on your mind?" onChangeText={(text) => setText(text)} 
            leading={() => {
                return(
                    <MaterialCommunityIcons name="brain" size={24} color="black"/>
                )
            }}
            />
            <View style={styles.submitButtonView}>
            <Button title="Add Blog Post" onPress={() => {
                        submitPost()
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