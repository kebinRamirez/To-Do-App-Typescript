import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const EmptyComponent: React.FC = () => {
    return <View style={styles.iconContainer}>
        <Icon name="eye-slash" size={40} />
        <Text style={styles.text}>{'No tasks found'}</Text>
    </View>
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    }
});

export default EmptyComponent;