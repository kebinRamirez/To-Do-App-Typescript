import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'

interface PickerProps {
    setShow: (a: boolean)=> void
    date: string
    show: boolean
    dateP: Date
    setDateP: (a: Date)=> void
    setDate: (a: string)=> void
    title: string
}

const DatePickerComplete: React.FC<PickerProps> = ({
    setShow, date, show, dateP, setDateP, setDate, title
}) => {
    return <>
        <Text style={styles.labelStyle}>
            {title}
        </Text>
        <TouchableOpacity onPress={() => {
            setShow(true)
        }} style={styles.viewStyle}>
            <View style={styles.datePicker}>
                <Text style={styles.dateText}>
                    {date}
                </Text>
            </View>
            <View style={styles.iconView}>
                <Icon name="angle-down" size={20} />
            </View>
        </TouchableOpacity>
        <DatePicker
            modal
            open={show}
            date={dateP}
            mode={'date'}
            minimumDate={new Date()}
            onConfirm={(date) => {
                setShow(false)
                setDateP(date)
                setDate(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())
            }}
            onCancel={() => {
                setShow(false)
            }}
        />
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
    datePicker: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 48,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    dateText: {
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

export default DatePickerComplete;