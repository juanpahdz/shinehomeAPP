import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './PerfilStyles';
import Colors from '../../../shared/colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Avatar } from 'react-native-elements';



const PerfilScreen = () => {



    return <KeyboardAwareScrollView style={Styles.container}>
        <StatusBar backgroundColor={Colors.colorOne}></StatusBar>
        <LinearGradient colors={[Colors.colorOne, Colors.colorThree]} style={Styles.iconContainer}>
            <Avatar size={200} containerStyle={{ flex: 2, marginLeft: 20, marginTop: 50 }}
                rounded source={require('./img/icon2.png')} />
        </LinearGradient>


        <View style={Styles.inputDatacontainer}>

            <Text>YA TU SABE</Text>

            <TouchableOpacity onPress={() => Apartamentos()}>
                <LinearGradient style={Styles.aptoButton} colors={[Colors.colorOne, Colors.colorTwo]}>
                    <Text style={Styles.textAptoButtom} >Mis Inmbuebles Publicados</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>

    </KeyboardAwareScrollView>
}

export default PerfilScreen;