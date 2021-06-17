import React, {useEffect} from 'react';
import{Image, StatusBar, View, ActivityIndicator} from 'react-native';
import Colors from '../../../shared/colors/Colors'; 
import LinearGradient from 'react-native-linear-gradient';
import SplashStyles from './SplashStyles';
import { useState } from 'react/cjs/react.development';

const SplashScreen = ({navigation}) =>{
    const waitingTimeSplash = () => {
        setTimeout(()=>{
            navigation.navigate('Login');
        },3000)
    }
    useEffect(()=>{
        waitingTimeSplash();
    }, []);

    return (
    <View style={SplashStyles.gradientContainer}>
        <StatusBar backgroundColor={SplashStyles.statusbar}></StatusBar> 
    <LinearGradient
        colors= {[Colors.colorOne, Colors.colorTwo]}
        styles= {SplashStyles.gradientContainer}>
        <StatusBar backgroundColor={Colors.colorTwo}></StatusBar>
        <Image source={require('./img/casa.png')} />
        <ActivityIndicator size="large" color="white"></ActivityIndicator>
    </LinearGradient>
    </View>
    )
    
}

export default SplashScreen;