import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.txt}>{roundNumber}.Tahmin: </Text>
            <Text style={styles.txt}>{guess}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderColor: '#E53935',
        borderRadius: 30,
        margin: 10,
        padding: 10,
        elevation: 4,
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'white',

    },
    txt: {
        color: '#FF7B70',
        fontWeight: 'bold',
        fontSize: 20
    }
})