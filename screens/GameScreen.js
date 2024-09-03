import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleU from '../components/TitleU'
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import ComputerGuess from '../components/ComputerGuess';

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, GameOver }) {
    const initalGuess = generateNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initalGuess)
    const [guessCount, setGuessCount] = useState([initalGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            GameOver(guessCount.length);
        }
    }, [currentGuess, userNumber, GameOver]);




    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Hadi Oradan!', 'Yanlış olduğunu bile bile basıyorsun!... Özür dilersen devam edebilirsin  :)',
                [{ text: 'Özür Dilerim  :(' }]);
            return;
        }


        if (direction === 'lower') {
            maxNumber = currentGuess
        }
        else {
            minNumber = currentGuess + 1
        }
        const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess)
        setCurrentGuess(newRandomNumber);
        setGuessCount((prevGuess) => [newRandomNumber, ...prevGuess])
    }

    function generateNumber(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min

        if (randomNumber === exclude) {
            return randomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }
    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    }, []);
    return (
        <View style={styles.container}>
            <TitleU>Bilgisayar Tahmini</TitleU>
            <ComputerNumber>{currentGuess}</ComputerNumber>
            <View style={styles.card}>
                <Text style={styles.title}>Altında mı üstünde mi ?</Text>
                <View style={styles.artieksiContainer}>
                    <CustomButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                        <AntDesign name="minus" size={24} color="white" />
                    </CustomButton>
                    <CustomButton onPressed={nextGuessHandler.bind(this, 'greater')}>
                        <AntDesign name="plus" size={24} color="white" />
                    </CustomButton>
                </View>

            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessCount}
                    keyExtractor={(itemData) => itemData}
                    renderItem={(itemData) => (
                        <ComputerGuess roundNumber={guessCount.length - itemData.index}
                            guess={itemData.item} />
                    )} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
    },
    artieksiContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#E53935',
        alignItems: 'center',
        width: 300

    },
    card: {
        marginTop: 24,
        backgroundColor: '#FF7B70',
        padding: 16,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E53935',
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },
    listContainer: {
        flex: 1
    }
})