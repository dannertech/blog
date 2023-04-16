import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    return(
        <View>
            <Text>Create Screen</Text>
            <Text>Enter Blog Post</Text>
            <TextInput placeholder="Enter Post Here" onChangeText={(text) =>setText(text)}/>
            <TouchableOpacity onPress={() => {
                        Context.dispatch({type: 'ADD_POST', payload: `Blog Post #${Context.state.length + 1}`})
                        
                    }}><Text>Add Blog Post</Text></TouchableOpacity>
        </View>
    )
};

export default CreateScreen;