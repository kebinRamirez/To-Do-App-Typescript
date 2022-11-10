import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'

interface PickerProps {
    title: string
    funShow: (a: boolean)=>void
    time: string
    show: boolean
    date: Date
    funTime: (a: string)=> void
}

const TimePicker: React.FC<PickerProps> = ({
    title, funShow, time, show, date, funTime
}) => {
    return <>
        <View style={styles.column}>
            <Text style={styles.labelStyle}>
                {title}
            </Text>
            <TouchableOpacity onPress={() => {
                funShow(true)
            }} style={styles.viewStyle}>
                <View style={styles.datePicker}>
                    <Text style={styles.dateText}>
                        {time}
                    </Text>
                </View>
                <View style={styles.iconView}>
                    <Icon name="clock-o" size={20} style={{ color: '#dfdfdf' }} />
                </View>
            </TouchableOpacity>
        </View>
        <DatePicker
            modal
            open={show}
            date={date}
            mode={'time'}
            minimumDate={new Date()}
            onConfirm={(date) => {
                funShow(false)
                funTime( ((date.getHours()+"").length==1?("0"+date.getHours()):(date.getHours()+"")) + ":" + ((date.getMinutes()+"").length==1?("0"+date.getMinutes()):(date.getMinutes()+"")))
            }}
            onCancel={() => {
                funShow(false)
            }}
        />
    </>
}


const styles = StyleSheet.create({
    column: {
        flex: 1,
        justifyContent: 'center',
    },
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

export default TimePicker;