import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { taskState } from '../redux/features/CreateATask'
import EmptyComponent from './EmptyComponent'
import { useDispatch } from 'react-redux';
import { complete, uncomplete } from '../redux/features/CreateATask'

interface ListProps {
    tasks: taskState[]
}

const ListComponent: React.FC<ListProps> = ({
    tasks
}) => {
    const dispatch = useDispatch();

    return <>
        {tasks.length == 0 ? (
            <EmptyComponent />
        ) : (
            tasks.map((item, index) => {
                return <View key={item.id} style={styles.card}>
                    <View style={styles.checkContainer}>
                        {item.completed ? (
                            <TouchableOpacity onPress={()=> dispatch(uncomplete(item.id))} style={styles.checkCompleted} />
                        ) : (
                            <TouchableOpacity onPress={()=> dispatch(complete(item.id))} style={styles.check} />
                        )}
                    </View>
                    <TouchableOpacity style={styles.contentContainer}>
                        <Text style={styles.titleStyle}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            })
        )}
    </>
}


const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.93,
        marginTop: 5,
        height: 40,
        flexDirection: 'row',
    },
    checkContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    check: {
        height: 20,
        width: 20,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#00d06a'
    },
    checkCompleted: {
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: '#ff2a42'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 17,
        color: 'black',
    }
});

export default ListComponent;