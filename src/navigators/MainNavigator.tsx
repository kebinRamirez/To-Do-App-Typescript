import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { taksList, taskState, starting } from '../redux/features/CreateATask';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    const tasks = useSelector(taksList);
    const [charged, setCharged] = useState(false);
    const dispatch = useDispatch();

    const storeData = async (value: taskState[], key: string) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    // saving tasks data
    useEffect(() => {
        if (charged) {
            storeData(tasks.task, '@storage_Key_tasks')
            storeData(tasks.taskCompleted, '@storage_Key_tasksCompleted')
        }
    }, [tasks.taskCompleted ,tasks.task])

    // recovering stored data
    useEffect(() => {
        if (!charged) {
            // getting tasks date
            const t = getData('@storage_Key_tasks')
            // getting tasks completed data
            const t2 = getData('@storage_Key_tasksCompleted')
            // setting data in the states

            t.then(result1 => {
                t2.then(result2 =>
                    dispatch(starting({
                        tasks: result1,
                        tasksCompleted: result2
                    }))
                )
            })

            setCharged(true)
        }
    })

    return <NavigationContainer>
        <Stack.Navigator initialRouteName="homescreen">
            <Stack.Screen
                name="homescreen"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <Text style={styles.textStyle}>{"To-Do App"}</Text>,
                    headerRight: () => (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Icon
                            name='search'
                            size={23}
                            style={styles.headerIcon}
                            onPress={() => Alert.alert("Coming soon...")}
                        />
                        <Icon
                            name='bell'
                            size={23}
                            style={styles.headerIcon}
                            onPress={() => Alert.alert("Coming soon...")}
                        />
                        <Icon
                            name='bars'
                            size={23}
                            style={[styles.headerIcon, { marginRight: 0 }]}
                            onPress={() => Alert.alert("Coming soon...")}
                        />
                    </View>
                    ),
                }}
            />
            <Stack.Screen
                name="addtaskscreen"
                component={AddTaskScreen}
                options={{
                    headerBackImageSource: { uri: 'https://res.cloudinary.com/dhejcruqm/image/upload/v1667993396/back_2_re3gor.png' },
                    headerTitle: (props) => <Text style={[styles.textStyle, { marginLeft: 0 }]}>{"add task"}</Text>,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    headerIcon: {
        color: 'black',
        marginRight: 25
    },
    textStyle: {
        color: 'black',
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 10
    },
});

export default AppNavigator