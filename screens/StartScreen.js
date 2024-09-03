import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import TitleU from '../components/TitleU';


export default function StartScreen({ onSendNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('')
    function resetHandler() {
        setEnteredNumber('');
    }
    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || (chosenNumber <= 0) || (chosenNumber > 99)) {
            Alert.alert('Geçersiz sayı', 'Sayı 1 ile 99 arasında olmalı',
                [{ text: 'Tamam', style: 'destructive', onPress: resetHandler }]);
                return;
        }
        onSendNumber(chosenNumber)
    }
    function numberHandler(number) {
        // console.log(number);
        setEnteredNumber(number);
    }
    return (
        <View style={styles.container}>
            <TitleU>Sayı Tahmin Uygulaması</TitleU>
            <View style={styles.Card}>
                <TextInput style={styles.input}
                    maxLength={2}
                    placeholder='....' 
                    value={enteredNumber}
                    onChangeText={numberHandler}
                    keyboardType='numeric' />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPressed={resetHandler} >Temizle</CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPressed={confirmHandler}>Onayla</CustomButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    Card: {
        backgroundColor: '#FF7F50',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 9,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'lightyellow',
        width: 36,
        height: 50,
        marginVertical: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonsContainer: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonContainer: {
        padding: 16,
        flex: 1,

    }
})