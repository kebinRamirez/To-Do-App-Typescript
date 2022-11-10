import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import TimePicker from "./TimePicker";
import DatePickerComplete from "./DatePicker";
import PickerComponent from './PickerComponent'
import { RemidPickerConst, RepeatPickerConst } from '../constanst/PickerConstanst';

interface AddAndEditProps {
    title: string
    setTitle: (a: string) => void
    date: string
    dateP: Date
    setDate: (a: string) => void
    setDateP: (a: Date) => void
    setShow: (a: boolean) => void
    show: boolean
    setShowStart: (a: boolean) => void
    setStartTime: (a: string) => void
    showStart: boolean
    startTime: string
    setShowEnd: (a: boolean) => void
    setEndTime: (a: string) => void
    showEnd: boolean
    endTime: string
    remind: string
    setRemind: (a: string) => void
    repeat: string
    setRepeat: (a: string) => void
}

const AddAndEditComponent: React.FC<AddAndEditProps> = ({
    title, setTitle, date, dateP, setDate, setDateP, setShow, show, setShowStart, setStartTime, showStart, startTime, setShowEnd, setEndTime, showEnd, endTime,
    remind, setRemind, repeat, setRepeat
}) => {
    return <>
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
            <View style={{ width: 10 }} />
            {/* end time picker */}
            <TimePicker date={dateP} funShow={setShowEnd} funTime={setEndTime} show={showEnd} time={endTime} title="End time" />
        </View>
        {/* Remind picker */}
        <PickerComponent title="Remind" constP={RemidPickerConst} val={remind} fun={setRemind} />
        {/* Repeat picker */}
        <PickerComponent title="Repeat" constP={RepeatPickerConst} val={repeat} fun={setRepeat} />
    </>
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
});

export default AddAndEditComponent;