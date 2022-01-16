import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function TodoItem({ item, pressHandler, editHandler }) {

    const [text, setText] = useState(item.text);
    const [isEditing, setEdit] = useState(false);

    const handleEdit = () => {
        editHandler(item.key, text);
        setEdit(false);
    };

    return (
        <View style={styles.item}>
            {isEditing
                ? <TextInput autoFocus={true} value={text} onChangeText={setText} style={styles.TodoButtonText} />
                : <Text numberOfLines={1} style={styles.itemText}>{item.text}</Text>
            }
            <View style={styles.Todobutton}>
                <View style={styles.deledsaveButton}>
                    <Button title="Delete" onPress={() => pressHandler(item.key)} style={styles.deledsaveButton} />
                </View>
                {isEditing
                    ?
                    <View style={styles.deledsaveButton}>
                        <Button title="Save" onPress={handleEdit} style={styles.deledsaveButton} />
                    </View>
                    : <View style={styles.deledsaveButton}>
                        <Button title="Edit" onPress={() => {

                            setTimeout(() => setEdit(true), 300)
                        }} style={styles.deledsaveButton} />
                    </View>
                }
            </View>

        </View>

    )
}



const styles = StyleSheet.create({
    item: {
        padding: 5,
        marginTop: 16,
        margin: 5,
        borderColor: '#3cb371',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
        minWidth: 140,
        maxWidth: 150,
        minHeight: 100,
        position: 'relative'
    },
    itemText: {
        width: "70%",
        paddingVertical: 10,
        padding: 5,
        marginRight: 5,
        borderRadius: 6
    },
    TodoButtonText: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    Todobutton: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        position: 'absolute',
        bottom: 0
    },
    deledsaveButton: {
        margin: 5
    }
})
