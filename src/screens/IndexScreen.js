import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import CardComponent from '../components/CardComponent';
import {Button, TextInput} from '@react-native-material/core';
const emptyPostsImage = require('../imageAssets/kim-crying.png')

import { BlogContext } from '../context/BlogContext';
const IndexScreen = (props) => {

    const Context = useContext(BlogContext);
    const {state} = Context
    return(     
        <View style={styles.mainView}>            
           {state.length > 0 ? 
           <FlatList
           data={Context.state}
           renderItem={({item}) => {
               return(
                   <CardComponent title={item.title} goToEdit={props.navigation} id={item.key} goToShow={props.navigation} />
               )
           }}
           /> : 
           <View style={styles.mainView}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 250}}>Nothing's here</Text>
           <Image source={emptyPostsImage} style={{height: 200, width: 200 , alignSelf: 'center'}}/>
           </View>
           } 
            <View style={styles.buttonView}>
            <Button onPress={() => props.navigation.navigate('Create')} title="Go to Create Screen" /> 
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    buttonView: {
        marginBottom: 100,
        marginHorizontal: 100
    }
});

export default IndexScreen;