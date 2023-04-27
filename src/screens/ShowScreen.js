import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ShowScreen = (props) => {
    return(
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>{props.route.params.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 50
    }
})

export default ShowScreen;