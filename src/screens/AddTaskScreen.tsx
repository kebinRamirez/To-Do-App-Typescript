import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput, Alert } from 'react-native'
import PickerComponent from "../components/PickerComponent";
import { RemidPickerConst, RepeatPickerConst } from '../constanst/PickerConstanst';
import TimePicker from "../components/TimePicker";
import DatePickerComplete from "../components/DatePicker";
import { useDispatch } from 'react-redux';
import { create } from '../redux/features/CreateATask'
import moment from 'moment'

function AddTaskScreen({ navigation }: any) {
    const [title, setTitle] = useState("")
    const [show, setShow] = useState(false)
    const [showStart, setShowStart] = useState(false)
    const [showEnd, setShowEnd] = useState(false)
    const [date, setDate] = useState("Select a date")
    const [dateP, setDateP] = useState(new Date());
    const [startTime, setStartTime] = useState('Select a start')
    const [endTime, SetEndTime] = useState('select an end')
    const [remind, setRemind] = useState("Select a remind")
    const [repeat, setRepeat] = useState("Select a Repeat")
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scroollViewStyle}>
                <Text style={styles.labelStyle}>
                    {'Title'}
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Type a title"
                />
                {/* date picker */}
                <DatePickerComplete date={date} dateP={dateP} setDate={setDate} setDateP={setDateP} setShow={setShow} show={show} title={'Deadline'} />
                <View style={styles.viewStyle}>
                    {/* start time picker */}
                    <TimePicker date={dateP} funShow={setShowStart} funTime={setStartTime} show={showStart} time={startTime} title="Start time" />
                    {/* space between */}
                    <View style={{width:10}}/>
                    {/* end time picker */}
                    <TimePicker date={dateP} funShow={setShowEnd} funTime={SetEndTime} show={showEnd} time={endTime} title="End time" />
                </View>
                {/* Remind picker */}
                <PickerComponent title="Remind" constP={RemidPickerConst} val={remind} fun={setRemind} />
                {/* Repeat picker */}
                <PickerComponent title="Repeat" constP={RepeatPickerConst} val={repeat} fun={setRepeat} />

            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    if(title!="" && date!="Select a date" && startTime!="Select a start" && endTime!="select an end" && remind!="Select a remind" && repeat!="Select a Repeat"){
                        dispatch(create(
                            {
                                id:moment().valueOf(),
                                title: title,
                                deadline: date,
                                startTime: startTime,
                                endTime: endTime,
                                remind: remind,
                                repeat: repeat,
                                completed: false,
                            }
                        ))
                        navigation.goBack()
                    }else{
                        Alert.alert('Complete the information')
                    }
                    
                }}
                style={styles.buttonStyle}>
                <Text style={styles.textButtonStyle}>
                    {'Create a Task'}
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
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
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

export default AddTaskScreen;