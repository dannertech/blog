import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
const trashIcon = require('../imageAssets/trash.png');
const pencilIcon = require('../imageAssets/pencil.png');
import { BlogContext } from '../context/BlogContext';

const CardComponent = (props) => {
    const {dispatch} = useContext(BlogContext);
    return(
        <TouchableOpacity onPress={() => props.goToShow.navigate('Show', {
            title: props.title
        })}>
        <View style={styles.mainView}>
           
            <View style={styles.textView}>
            <Text style={styles.textStyle}>{props.title}</Text>
            </View>
            <View style={styles.buttonsView}>
            <TouchableOpacity onPress={() => props.goToEdit.navigate('Edit', {
                title: props.title,
                key: props.id
            })}>
            <Image source={pencilIcon} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch({type:'DELETE_POST', payload: props.id})}>
            <Image source={trashIcon} style={styles.iconStyle}/>
            </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
mainView: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 15
},
buttonsView: {
    flexDirection: 'column',
    justifyContent: 'center',
},
iconStyle: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginTop: 10
},
textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
},
textView: {
    justifyContent: 'center'
}
});

export default CardComponent;