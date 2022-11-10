import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Picker from '@ouroboros/react-native-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PickerProps {
    val: string
    constP: {value: string, text: string }[]
    fun: (a: string) => void
    title: string
}

const PickerComponent: React.FC<PickerProps> = ({
    val,
    constP,
    fun,
    title
}) => {
    return <>
        <Text style={styles.labelStyle}>
            {title}
        </Text>
        <View style={styles.viewStyle}>
            <View style={styles.column}>
                <Picker
                    onChanged={fun}
                    options={constP}
                    style={styles.pickerStyle}
                    value={val}
                />
            </View>
            <View style={styles.iconView}>
                <Icon name="angle-down" size={20} />
            </View>
        </View>
    </>
}


const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    viewStyle: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        justifyContent: 'center',
    },
    pickerStyle: {
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: '#cccccc',
        fontWeight: 'bold'
    },
    iconView: {
        width: 30,
        marginLeft: -1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#f9f9f9',
    },

});

export default PickerComponent;