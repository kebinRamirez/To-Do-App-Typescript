import React, { useEffect } from "react";
import { SafeAreaView, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import { taksList, } from '../redux/features/CreateATask';
import ListComponent from '../components/List';

function HomeScreen({ navigation }: any) {
    const tasks = useSelector(taksList);

    useEffect(() => {

    }, [tasks])

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ' white' }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scroollViewStyle}>
                <Text style={styles.labelStyle}>
                    {'Completed Task'}
                </Text>
                <ListComponent tasks={tasks.taskCompleted} />
                <Text style={styles.labelStyle}>
                    {'Pending Task'}
                </Text>
                <ListComponent tasks={tasks.task} />

            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('addtaskscreen')
                }}
                style={styles.buttonStyle}>
                <Text style={styles.textButtonStyle}>
                    {'Add a Task'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scroollViewStyle: {
        width: Dimensions.get('window').width * 0.98,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: '#cccccc',
        fontWeight: 'bold'
    },
    labelStyle: {
        fontSize: 23,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },

    viewStyle: {
        flexDirection: 'row',
    },
    buttonStyle: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#00cf69',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textButtonStyle: {
        fontSize: 16,
        color: 'white'
    }
});

export default HomeScreen;