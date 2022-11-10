import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { taskState } from '../redux/features/CreateATask'

interface InfoProps {
    selectedTask: taskState
}

const InfoComponent: React.FC<InfoProps> = ({
    selectedTask
}) => {
    return <View style={{ padding: 10 }}>
        <Text style={styles.labelStyle}>
            {'Title: '}
        </Text>
        <View style={styles.contentStyle}>
            <Text>
                {selectedTask.title}
            </Text>
        </View>
        <Text style={styles.labelStyle}>
            {'Deadline: '}
        </Text>
        <View style={styles.contentStyle}>
            <Text>
                {selectedTask.deadline}
            </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <View style={styles.column}>
                <Text style={styles.labelStyle}>
                    {'start Time:'}
                </Text>
                <View style={[styles.contentStyle, { marginRight: 10 }]}>
                    <Text>
                        {selectedTask.startTime + ":00"}
                    </Text>
                </View>

            </View>
            <View style={styles.column}>
                <Text style={styles.labelStyle}>
                    {'End Time:'}
                </Text>
                <View style={styles.contentStyle}>
                    <Text>
                        {selectedTask.endTime + ':00'}
                    </Text>
                </View>
            </View>
        </View>
        <Text style={styles.labelStyle}>
            {'Remind:'}
        </Text>
        <View style={styles.contentStyle}>
            <Text>
                {selectedTask.remind}
            </Text>
        </View>
        <Text style={styles.labelStyle}>
            {'Repeat:'}
        </Text>
        <View style={styles.contentStyle}>
            <Text>
                {selectedTask.repeat}
            </Text>
        </View>
        <Text style={styles.labelStyle}>
            {'State:'}
        </Text>
        <View style={styles.contentStyle}>
            <Text>
                {selectedTask.completed ? ('Completed') : ('Uncompleted')}
            </Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginTop:10
    },
    column: {
        flex: 1
    },
    contentStyle: {
        height: 50,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        marginTop: 10
    }
});

export default InfoComponent;