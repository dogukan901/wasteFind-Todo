import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react/cjs/react.development'

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeTextHandler = (val) => {
        setText(val);
    }

    const sampleJSON = {
        "AddTodo": 'Add Todo',
        "EditTodo": 'Edit Todo',
        "DeleteTodo": 'Delete Todo'
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder='Add a new todo...' onChangeText={changeTextHandler} ></TextInput>

            {/*  <Pressable style={styles.button} onPress={() => submitHandler(text)}>
                <Text style={styles.addTodoButtonText}>{title}</Text>
            </Pressable> */}
            <View style={styles.Todobutton}>
                <Button onPress={() => submitHandler(text)} title={sampleJSON.AddTodo} color='coral'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderBottomColor: 'coral',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1
    },
    Todobutton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    addTodoButtonText: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})
