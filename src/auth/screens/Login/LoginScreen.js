import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, StatusBar, TextInput, Button, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';


const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const validateLogin = async e => {
    if (email == "" || pwd == "") {
      Alert.alert("Debe llenar todos los campos")
    }
    else {
      const res = await fetch(
        `http://shineapi.us-east-2.elasticbeanstalk.com/user/login`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: pwd,
          }),
        },
      );

      await res
        .json()
        .then(data => {
          if (typeof data['error'] != 'undefined') {
            Alert.alert(data.error)
          } else {
            navigation.navigate("Apartamentos");
          }
        })

        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  const registro = () => {
    navigation.navigate("Registro")
  }

  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.colorOne}></StatusBar>
    <LinearGradient colors={[Colors.colorOne, Colors.colorThree]} style={Styles.iconContainer}>
      <Image source={require('./img/icon.png')} />

    </LinearGradient>
    <View style={Styles.inputDatacontainer}>
      <TextInput defaultValue={email} onChangeText={(text) => { setEmail(text) }} keyboardType="email-address" inlineImageLeft="outline_email_black_24" inlineImagePadding={10} style={Styles.inputDataLogin} placeholder="Email"></TextInput>
      <TextInput defaultValue={pwd} onChangeText={(text) => { setPwd(text) }} secureTextEntry={true} inlineImageLeft="outline_password_black_24" inlineImagePadding={10} style={Styles.inputDataLogin} placeholder="Password"></TextInput>
      

      <TouchableOpacity onPress={() => validateLogin()}>
        <LinearGradient style={Styles.loginButton} colors={[Colors.colorOne, Colors.colorTwo]}>
          <Text style={Styles.textLoginButtom} >Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => registro()}>
        <LinearGradient style={Styles.registroButton} colors={[Colors.colorOne, Colors.colorTwo]}>
          <Text style={Styles.textRegistroButtom} >Registro</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
}

export default LoginScreen;