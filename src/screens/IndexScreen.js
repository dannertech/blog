import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Button} from 'react-native';

import { BlogContext } from '../context/BlogContext';
const IndexScreen = (props) => {

    const Context = useContext(BlogContext);
    
    return(
        <View>
            <FlatList
            data={Context.state}
            renderItem={({item}) => {
                return(
                    <Text>{item.title}</Text>
                )
            }}
            />
            <Button onPress={() => props.navigation.navigate('Create')} title="Go to Create Screen" /> 
        </View>
    )
};

export default IndexScreen;