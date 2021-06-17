import React from 'react';
import {Text, Image, View} from 'react-native';
import UserComponentStyle from './UserComponentStyle';

const UserComponent = (props) => {
    user = props.user;
    return (
        <View style={UserComponentStyle.container}>
            <Image source={{uri: user.avatar}}
            style = {{width: 200, height:200}} />
            <Text> {user.first_name}</Text>
            <Text> {user.email}</Text>
            <Text> {user.id}</Text>
        </View>        
    );
}

export default UserComponent;