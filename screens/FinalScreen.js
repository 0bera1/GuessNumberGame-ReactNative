import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import TitleU from '../components/TitleU'
import CustomButton from '../components/CustomButton'

export default function FinalScreen({ roundsNumber, userNumber, playAgain }) {
  return (
    <View style={styles.container}>
      <TitleU>Oyun Tamamlandı!</TitleU>
      <View style={styles.imageView}>
        <Image style={styles.image}
          source={require('../assets/success.jpg')} />
      </View>
      <Text style={styles.result} >
        <Text style={styles.countNum}>{roundsNumber}</Text> denemeyle
        <Text style={styles.countNum}> {userNumber}</Text> sayısını buldun
      </Text>
      <View >
        <CustomButton onPressed={playAgain}>Tekrar Oyna</CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageView: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 175,
    borderColor: '#E53935',
    margin: 30

  },
  image: {
    width: '100%',
    height: '100%',

  },
  result: {
    fontSize: 20,
    textAlign: 'center'
  },
  countNum: {
    color: '#E53935'
  },

})