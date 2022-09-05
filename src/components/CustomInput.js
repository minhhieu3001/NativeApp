import React from "react";
import { StyleSheet, TextInput, View, Dimensions, Image } from "react-native";

const CustomInput = ({value, setValue, placeholder, password, iconName}) => {
    return (
        <View style={styles.input}>
            <Image style={styles.icon} source={"/assets/email.png"} />
            <TextInput
                value={value} 
                placeholder={placeholder} 
                onChangeText={setValue}
                secureTextEntry= {password}
            />
        </View>
    )
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
    input : {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        width: DEVICE_WIDTH - 150,
        flexDirection: 'row',
        marginHorizontal: 20,
        padding:8,
        borderRadius: 20,
        color: '#000',
        marginTop:2
    
      },
    icon: {
        width:30,
        height: 30
    }
})

export default CustomInput