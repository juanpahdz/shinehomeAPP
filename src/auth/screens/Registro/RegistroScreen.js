import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './RegistroStyles';
import Colors from '../../../shared/colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const RegistroScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [city, setCity] = useState("");
    const [pwd, setPwd] = useState("");

    const validateRegistro = async e => {
        if (email === "" || pwd == "" || name == "" || pais == "" || city == "") {
            Alert.alert("Debe llenar todos los campos")
        }
        else {
            const res = await fetch(`http://shineapi.us-east-2.elasticbeanstalk.com/user/register`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    country: pais,
                    city: city,
                    password: pwd,
                    description: "Loving What i Do",
                }),
              });
              await res
              .json()
              .then(data => {
                if (typeof data['error'] != 'undefined') {
                    Alert.alert(data.error)
                } else {
                  navigation.navigate('Apartamentos');
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
        }
    }


    return <KeyboardAwareScrollView style={Styles.container}>
        <StatusBar backgroundColor={Colors.colorOne}></StatusBar>
        <LinearGradient colors={[Colors.colorOne, Colors.colorThree]} style={Styles.iconContainer}>
            <Image source={require('./img/icon2.png')} />
        </LinearGradient>

        <View style={Styles.inputDatacontainer}>
            <TextInput defaultValue={name} onChangeText={(text) => { setName(text) }} inlineImageLeft="baseline_badge_black_24" inlineImagePadding={10} style={Styles.inputDataRegistro} placeholder="Nombre Completo"></TextInput>
            <TextInput defaultValue={email} onChangeText={(text) => { setEmail(text) }} keyboardType="email-address" inlineImageLeft="outline_email_black_24" inlineImagePadding={10} style={Styles.inputDataRegistro} placeholder="Email"></TextInput>
            <TextInput defaultValue={pais} onChangeText={(text) => { setPais(text) }}  inlineImageLeft="baseline_flag_black_24" inlineImagePadding={10} style={Styles.inputDataRegistro} placeholder="Pais"></TextInput>
            <TextInput defaultValue={city} onChangeText={(text) => { setCity(text) }} inlineImageLeft="baseline_apartment_black_24" inlineImagePadding={10} style={Styles.inputDataRegistro} placeholder="Ciudad"></TextInput>
            <TextInput defaultValue={pwd} onChangeText={(text) => { setPwd(text) }} secureTextEntry={true} inlineImageLeft="outline_password_black_24" inlineImagePadding={10} style={Styles.inputDataRegistro} placeholder="Contraseña"></TextInput>

            <TouchableOpacity onPress={() => validateRegistro()}>
                <LinearGradient style={Styles.ingresoButton} colors={[Colors.colorOne, Colors.colorTwo]}>
                    <Text style={Styles.textIngresoButtom} >Registrar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    </KeyboardAwareScrollView>
}

export default RegistroScreen;