import React from 'react'
import { StyleSheet, View, Button } from "react-native";


import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = ({ roundsNumber, userNumber, newGame}) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over</TitleText>
            <BodyText>Number of rounds: {roundsNumber}</BodyText>
            <BodyText>Number was: {userNumber}</BodyText>
            <Button title='Start over' onPress={newGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
      },
  });

export default GameOverScreen
