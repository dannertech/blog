import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const Context = useContext(BlogContext);
    
    return(
        <View>
            <Text>Create Screen</Text>
            <TouchableOpacity onPress={() => {
                        Context.dispatch({type: 'ADD_POST', payload: `Blog Post #${Context.state.length + 1}`})
                        
                    }}><Text>Add Blog Post</Text></TouchableOpacity>
        </View>
    )
};

export default CreateScreen;