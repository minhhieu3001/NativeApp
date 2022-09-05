import React, {useState} from "react";
import { TextInput, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from '../components/CustomButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} iconName="email"/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} password={true} iconName="password"/>

            <CustomButton />
        </View>
    );
}

export default Login