import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({ children, onPressed }) {
    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) =>
                pressed ? [styles.buttonContainer, styles.pressed] :
                    styles.buttonContainer}
                onPress={onPressed}>
                <Text style={styles.buttonTxt}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    buttonTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    buttonContainer: {
        paddingVertical: 10,

    },
    pressed: {
        opacity: 0.4
    }

})