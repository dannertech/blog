import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BlogContext } from '../context/BlogContext';


const CreateScreen = () => {
    const Context = useContext(BlogContext);
    const [text, setText] = useState('');
    const [postSuccess, setPostSuccess] = useState(false);

    const submitPost = () => {
        if(text.length > 5){
            const key = Math.floor(Math.random() * 100000);
            Context.dispatch({type: 'ADD_POST', payload: {title: text, key: key}});
            setText('');
            setPostSuccess(true);
            setTimeout(() => {
                setPostSuccess(false)
            }, 10000)
        } else {
            null
        }
    };


    return(
        <View style={styles.mainView}>
            {postSuccess && (
                <Modal
                animationType='slide'
                transparent={true}
                >
                    <View style={styles.modalView}>
                        <Image source={{uri: 'https://media.giphy.com/media/REJjv9QftuFEI/giphy.gif'}} style={styles.successImage}/>
                        <Text style={{fontSize: 40, letterSpacing: 15, fontWeight: 'bold', color: 'rgb(110,42,232)'}}>Success!</Text>
                    </View>
               </Modal>
            )}
            
            <TextInput placeholder="What's on your mind?" onChangeText={(text) => setText(text)} 
            value={text}
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
    },
    successImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'rgb(110,42,232)',
        borderWidth: 10,
        marginVertical: 50,
        alignSelf: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: '#000',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        marginTop: 300,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

export default CreateScreen;