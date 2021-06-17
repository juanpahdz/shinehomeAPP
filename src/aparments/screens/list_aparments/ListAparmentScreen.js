import React, {useState, useEffect} from 'react';
import {View, Text, Button,Image, ScrollView} from 'react-native';

import ApartmentBox from './aparmentbox/AparmentBox'

 const ListApartmentsScreen = ({route, navigation}) =>{

    let [apartments, setApartments] = useState([]);

    const goToLogin = () => {
        navigation.navigate('Login');
    }  

    const getApartments = async () => {
        const res = await fetch(`http://shineapi.us-east-2.elasticbeanstalk.com/apartments/get-available`);
        const data = await res.json()
        .then((data) => setApartments(data))
      };
   
    const goToEdit = (id, admin) =>{
        navigation.navigate('Edit', {
            id: id,
            getAll: getApartments,
            admin: admin
        });
      }

    const goToDelete = async (id) =>{
        const res = await fetch(`http://shineapi.us-east-2.elasticbeanstalk.com/apartmenst/delete/${id}`)
        .then(() => getApartments())
      }

    useEffect(() => {
        getApartments();
      }, []);
    return ( 
        <ScrollView vertical={true} >
        <Button title="Volver a inicio" onPress={()=>goToLogin()}></Button>
        {apartments.map((apartment) => (
            <ApartmentBox
                key={apartment._id}
                id={apartment._id}
                adminid={apartment.admin}
                title={apartment.title}
                price={apartment.price}
                rooms={apartment.rooms}
                ubicacion={apartment.city}
                excerpt={apartment.excerpt}
                thumbnail={apartment.images}
                handleEdit={goToEdit}
                handleDelete={goToDelete}
            />
            ))}
    </ScrollView> 
    ); 
}

export default ListApartmentsScreen;