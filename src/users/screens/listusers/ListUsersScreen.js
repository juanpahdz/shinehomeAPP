import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import ListUsersStyles from './ListUsersStyles';
import UserService from '../services/UsersServices';
import UserComponent from '../../components/UserComponent';
//import {useEffect} from 'react/cjs/react.development';

const ListUsersScreen = () => {
    
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const users = await UserService.getUsers();
        console.log(users);
        setUsers(users);
    }

    useEffect(()=>{
        getUsers();
    },[]);


    return <View style={ListUsersStyles.container}>
        <FlatList data={users} renderItem={({item,index})=>
        <TouchableOpacity onPress={()=> UserService.getUser(item.id)}>
            <UserComponent id={item.id} user={item} position={index}></UserComponent>
        </TouchableOpacity>}>         
        </FlatList>
    </View>
}

export default ListUsersScreen;