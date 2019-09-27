import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from '../constants/colors'

import TitleText from "../components/TitleText";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.number}>{children}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
      color: Colors.accent,
      fontSize: 22
  }
});

export default NumberContainer;
