import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BlogContext } from '../context/BlogContext';
//import {SuccessAnimation} from 'react-native-success-animation';

const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    const [postSuccess, setPostSuccess] = useState(false);

    const submitPost = () => {
        return text.length > 5 ? Context.dispatch({type: 'ADD_POST', payload: text}) : null
    }
    return(
        <View style={styles.mainView}>
            {/* {postSuccess && (
                <SuccessAnimation 
                size={120}
                iconSize={120 * 0.7}
                iconColor='white'
                dotColor='#44c6b1'
                dotSize={20}
                duration={2000}
                backgroundColor='#44c6b1'
                animatedLayerColor='white'
                onAnimationEnd={() => setPostSuccess(false)}
                />
            )} */}
            
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
                        setPostSuccess(true);
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