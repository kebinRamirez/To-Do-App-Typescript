import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { taskState, deleteT, update } from '../redux/features/CreateATask'
import { useDispatch } from "react-redux";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { initialTaskState } from '../constanst/InitialTaskState'
import InfoComponent from './InfoComponent'
import AddAndEditComponent from './AddAndEditComponent'
import ActionButton from './ActionButton'


interface ModalProps {
    selectedTask: taskState
    modal: boolean
    setModal: (a: boolean) => void
    setSelectedTask: (a: taskState) => void
}

const ModalComponent: React.FC<ModalProps> = ({
    selectedTask,
    modal,
    setModal,
    setSelectedTask
}) => {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState("")
    const [show, setShow] = useState(false)
    const [showStart, setShowStart] = useState(false)
    const [showEnd, setShowEnd] = useState(false)
    const [date, setDate] = useState("Select a date")
    const [dateP, setDateP] = useState(new Date());
    const [startTime, setStartTime] = useState('Select a start')
    const [endTime, setEndTime] = useState('select an end')
    const [remind, setRemind] = useState("Select a remind")
    const [repeat, setRepeat] = useState("Select a Repeat")

    useEffect(() => {
        setTitle(selectedTask.title)
        setDate(selectedTask.deadline)
        setStartTime(selectedTask.startTime)
        setEndTime(selectedTask.endTime)
        setRemind(selectedTask.remind)
        setRepeat(selectedTask.repeat)
    }, [selectedTask])

    const onPressDelete = () => {
        dispatch(deleteT(selectedTask.id))
        setModal(false)
        setEditing(false)
        setSelectedTask(initialTaskState)
    }

    const onPressSave = () => {
        dispatch(update(
            {
                id: selectedTask.id,
                title: title,
                deadline: date,
                startTime: startTime,
                endTime: endTime,
                remind: remind,
                repeat: repeat,
                completed: selectedTask.completed,
            }
        ))
        setModal(false)
        setEditing(false)
        setSelectedTask(initialTaskState)
    }

    return <>
        {modal && (
            <Modal isVisible={modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Icon onPress={() => {
                            setModal(false)
                            setEditing(false)
                            setSelectedTask(initialTaskState)
                        }} name='close' size={25} />
                    </View>
                    <ScrollView>
                        <Icon onPress={() => {
                            setEditing(!editing)
                            console.log("enviando")
                        }} style={styles.editButtonStyle} name='edit' size={25} />
                        {!editing ? (
                            <InfoComponent selectedTask={selectedTask} />
                        ) : (
                            <View style={{ marginTop: 20, padding: 10 }}>
                                <AddAndEditComponent
                                    title={title}
                                    setTitle={setTitle}
                                    date={date}
                                    dateP={dateP}
                                    setDate={setDate}
                                    setDateP={setDateP}
                                    setShow={setShow}
                                    show={show}
                                    setShowStart={setShowStart}
                                    setStartTime={setStartTime}
                                    showStart={showStart}
                                    startTime={startTime}
                                    setShowEnd={setShowEnd}
                                    setEndTime={setEndTime}
                                    showEnd={showEnd}
                                    endTime={endTime}
                                    remind={remind}
                                    setRemind={setRemind}
                                    repeat={repeat}
                                    setRepeat={setRepeat}
                                />
                            </View>

                        )}
                    </ScrollView>
                    <View style={styles.bottomRow}>
                        <ActionButton color="#ff5f5f" name="Delete" onPress={onPressDelete} />
                        <ActionButton color="#00d06a" name="Save" onPress={onPressSave}/>
                    </View>
                </View>
            </Modal>
        )}
    </>
}


const styles = StyleSheet.create({
    editButtonStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 10,
        paddingRight: 10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    modalHeader: {
        width: '100%',
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        height: 40,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    bottomRow: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    }
});

export default ModalComponent;