import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './EditAparmentStyles';
import Colors from '../../../../shared/colors/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditAparmentScreen = ({route, navigation: {goBack}}) => {
  const {id, getAll, admin} = route.params;

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [images, setImages] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [rooms, setRooms] = useState('');
  const [country, setCountry] = useState('');
  const [adress, setAdress] = useState('');

  
  const updateAparment = async e => {
    if (
      title == '' ||
      price == '' ||
      city == '' ||
      images == '' ||
      excerpt == ''
    ) {
      Alert.alert('Debe llenar todos los campos');
    } else {
      const res = await fetch(
        `http://shineapi.us-east-2.elasticbeanstalk.com/user/${admin}/update/${id}`,
        {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            title: title,
            price: parseInt(price),
            city: city,
            images: images,
            excerpt: excerpt,
            rooms: rooms,
            country:country,
            thumbnail: images,
            adress:adress,
          }),
        },
      );

      await res
        .json()
        .then(data => {
          if (typeof data['error'] != 'undefined') {
            Alert.alert(data.error);
          } else {
            getAll();
            goBack();
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const getData = async () => {
    const res = await fetch(
      `http://shineapi.us-east-2.elasticbeanstalk.com/apartment/get/${id}`,
    );
    const data = await res.json();

    setTitle(data.title);
    setPrice('' + data.price);
    setCity(data.city);
    setImages(data.images);
    setExcerpt(data.excerpt);
    setRooms(data.rooms);
    setCountry(data.country);
    setAdress(data.adress);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <KeyboardAwareScrollView style={Styles.container}>
      <StatusBar backgroundColor={Colors.colorOne}></StatusBar>
      <LinearGradient
        colors={[Colors.colorOne, Colors.colorThree]}
        style={Styles.iconContainer}>
        <Image source={require('./img/icon2.png')} />
      </LinearGradient>
      <View style={Styles.inputDatacontainer}>
        <TextInput
          defaultValue={title}
          onChangeText={text => {
            setTitle(text);
          }}
          inlineImageLeft="baseline_badge_black_24"
          inlineImagePadding={10}
          style={Styles.inputDataRegistro}
          placeholder="Titulo del Anuncio"></TextInput>
        <TextInput
          defaultValue={price}
          onChangeText={text => {
            setPrice(text);
          }}
          inlineImageLeft="outline_email_black_24"
          inlineImagePadding={10}
          style={Styles.inputDataRegistro}
          placeholder="Precio"></TextInput>
        <TextInput
          defaultValue={city}
          onChangeText={text => {
            setCity(text);
          }}
          inlineImageLeft="baseline_flag_black_24"
          inlineImagePadding={10}
          style={Styles.inputDataRegistro}
          placeholder="Ciudad"></TextInput>
        <TextInput
          defaultValue={images}
          onChangeText={text => {
            setImages(text);
          }}
          inlineImageLeft="baseline_apartment_black_24"
          inlineImagePadding={10}
          style={Styles.inputDataRegistro}
          placeholder="URl Imagen"></TextInput>
        <TextInput
          defaultValue={excerpt}
          onChangeText={text => {
            setExcerpt(text);
          }}
          inlineImageLeft="outline_password_black_24"
          inlineImagePadding={10}
          style={Styles.inputDataRegistro}
          placeholder="Descripcion Breve"></TextInput>

        <TouchableOpacity onPress={() => updateAparment()}>
          <LinearGradient
            style={Styles.ingresoButton}
            colors={[Colors.colorOne, Colors.colorTwo]}>
            <Text style={Styles.textIngresoButtom}>Registrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditAparmentScreen;
