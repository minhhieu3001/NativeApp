import React from "react";
import { StyleSheet, TextInput, View, Dimensions, Image } from "react-native";
import email1 from "../../assets/email1.png";
import pass from "../../assets/pass.png";

const CustomInput = ({value, setValue, placeholder, password, image}) => {
    return (
        <View style={styles.input}>
            <Image style={styles.icon} source={image == "email" ? email1 : pass} />
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
        width:40,
        height: 30,
        padding: 10,
        margin: 7
    }
})

export default CustomInput