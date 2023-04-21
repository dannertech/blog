import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
const trashIcon = require('../imageAssets/trash.png');
const pencilIcon = require('../imageAssets/pencil.png');

const CardComponent = (props) => {

    return(
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
            <TouchableOpacity>
            <Image source={trashIcon} style={styles.iconStyle}/>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
mainView: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'black'
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