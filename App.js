import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCount, setGuessCount] = useState(0)


  function playAgainHandler(){
    setUserNumber(null);
    setGuessCount(0)
  }

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfGuess) {
    setGameIsOver(true)
    setGuessCount(numberOfGuess)
  }

  let screen = <StartScreen onSendNumber={sendedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} GameOver={gameOverHandler} />
    )
  }

  if (gameIsOver && userNumber) {
    screen = <FinalScreen
      roundsNumber={guessCount}
      userNumber={userNumber}
      playAgain={playAgainHandler} />
  }

  return (
    <LinearGradient
      // Button Linear Gradient
      style={styles.container}
      colors={['#FFA07A', 'transparent']}
    >
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={styles.container}
        imageStyle={styles.backImage}>
        {screen}
      </ImageBackground>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.35
  }
});
