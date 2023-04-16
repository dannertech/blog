import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import { BlogContext } from '../context/BlogContext';
const IndexScreen = () => {
    const Context = useContext(BlogContext);
    
    return(
        <View>
            <FlatList
            data={Context.blogPosts}
            renderItem={({item}) => {
                return(
                    <Text>{item.title}</Text>
                    
                )
            }}
            />
            <TouchableOpacity onPress={() => {
                        const currentPosts = [...Context.blogPosts];
                        
                        Context.setBlogPosts([...currentPosts, {title: `Blog Post #${Context.blogPosts.length + 1}`}])
                        
                    }}><Text>Add Blog Post</Text></TouchableOpacity>
        </View>
    )
};

export default IndexScreen;