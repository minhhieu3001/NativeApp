import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomButton = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>LOG IN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        backgroundColor : '#3B71F3',
        
        marginVertical : 15,
        padding: 10
    },
    text : {
        textAlign: 'center',
        color : 'white',
        fontWeight : 'bold'
    }
});

export default CustomButton