import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
    onPress: () => void
    color: string
    name: string
}

const ActionButton: React.FC<ButtonProps> = ({
    onPress,
    color,
    name
}) => {
    return <>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.buttonStyle, { backgroundColor: color }]}>
                <Text style={styles.textButtonStyle}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    </>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonStyle: {
        fontSize: 16,
        color: 'white'
    },
    buttonStyle: {
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }

});

export default ActionButton;