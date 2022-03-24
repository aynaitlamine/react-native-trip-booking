import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../config/theme";
import React from "react";

const Button = ({ style, ...props }) => {
  return (
    <TouchableOpacity style={style.shodow}>
        <LinearGradient
        style={[ styles.buttonContainer, style]}
        colors={["#46aeff", "#5884ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        >
        <Text style={style.text}>Start !</Text>
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        width: 280,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
});
