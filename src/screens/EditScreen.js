import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import { BlogContext } from '../context/BlogContext';
const EditScreen = (props) => {
    const {dispatch} = useContext(BlogContext);
    const [post, setPost] = useState('');

    const submitPost = () => {
        //if post text is not null, dispatch action to edit post
        return post != "" ? dispatch({type: 'EDIT_POST', payload: {key: props.route.params.key, title: post}}): null;
    }
    return(
        <View>
            <TextInput placeholder={props.route.params.title} value={post} onChangeText={(text) => setPost(text)}/>
            <Button title="Submit Edits" onPress={() => submitPost()}/>
        </View>
    )
};

export default EditScreen;