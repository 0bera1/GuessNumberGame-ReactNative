import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerNumber({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.Txt}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#FF7B70',
        padding: 25,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#E53935',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        shadowColor:'black',
        elevation:6,

        
    },
    Txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FF7B70',
       
    }
})