import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ShowScreen = (props) => {
    return(
        <View>
            <Text>{props.route.params.title}</Text>
        </View>
    )
};

export default ShowScreen;