import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, TouchableOpacity, Text, Button} from 'react-native';

import Styles from './AparmentBoxStyles';

const AparmentBox = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const onItemSelect = index => {
    setSelectedIndex(index);
    setVisible(false);
  };

  return (
    <View style={Styles.box}>
      <View style={Styles.imageContainer}>
        <Image
            style={Styles.thumbnail}
            source={{ uri: props.thumbnail }}
        />
      </View>
      <View style={Styles.content}>
            <View>
                <Text style={Styles.title}>{props.title}</Text>
                <Text style={Styles.where}>Lugar: {props.ubicacion}</Text>
                <Text style={Styles.price}>${props.price} COP</Text>
            </View>
            <View style={Styles.buttons}>

            <TouchableOpacity 
                onPress={() => {props.handleEdit(props.id, props.adminid)}}
                style={Styles.editar}>
                <Text style={{ color: "white"}}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {props.handleDelete(props.id)}}
                style={Styles.eliminar}>
                <Text style={{ color: "white", }}>Delete</Text>
            </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

export default AparmentBox;
