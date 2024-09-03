import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function TitleU({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        backgroundColor:'#E6C7B5',
        borderWidth: 2,
        borderColor: '#E53935',
        textAlign:'center',
        padding:15,
        marginTop:30,
        marginBottom:20,
        borderRadius:20,
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        shadowColor:'black',
        elevation:6,

    }
})