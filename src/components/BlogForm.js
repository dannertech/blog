import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';

const BlogForm = (props) => {
    const [text, setText] = useState('');
    return(
        <View>
            <TextInput placeholder={props.title != undefined ? props.title : "Enter Text Here"} value={text} onChangeText={(newText) => setText(newText)}
            />
            <Button title={props.buttonTitle} onPress={() => props.buttonFunc()}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default BlogForm;