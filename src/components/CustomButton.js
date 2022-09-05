import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({onPress,text, type = "PRIMARY"}) => {
    return(
        <Pressable onPress={onPress} style={[styles.view, styles[`view_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    view : {
        marginVertical : 5,
        padding: 10
    },
    view_PRIMARY : {
        backgroundColor : '#3B71F3',
    },
    view_TERTIARY : {
        backgroundColor : "",
    },
    text : {
        textAlign: 'center',
        fontWeight : 'bold'
    },
    text_PRIMARY : {
        color : "white",
    },
    text_TERTIARY : {
        color : ''
    }
});

export default CustomButton