import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Emoji(props) {
    return (
        <Text style={styles.emoji} className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}>
            {props.symbol}Emoji Training
        </Text>

    )
}

const styles = StyleSheet.create({
    emoji: {
        color: `#ff0000`
    }
})
