import React from 'react'
import { StyleSheet, Text } from "react-native";

const TitleText = ({ children, style }) => {
    return (
        <Text style={{...styles.title, style}}>
         {children}   
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
  });
export default TitleText