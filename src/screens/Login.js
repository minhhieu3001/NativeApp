import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from '../components/CustomButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = () => {
        console.warn("Log in");
    }

    const onResetPasswordPressed = () => {
        console.warn("Reset password");
    }

    return (
        <View>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} iconName="email.png" image="email"/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} password={true} image="pass"/>

            <CustomButton text="Log in" onPress={onLoginPressed}/>
            <CustomButton text="Reset password?" onPress={onResetPasswordPressed} type="TERTIARY" />

            <Text style={styles.text}>--- or ---</Text>

            <CustomButton />
            <CustomButton />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign : 'center',
        marginBottom : 10
    }
})

export default Login