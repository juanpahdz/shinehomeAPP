import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/Login/LoginScreen';
import ListApartmentsScreen from './src/aparments/screens/list_aparments/ListAparmentScreen';
import SplashScreen from './src/splash/screens/splash-screen/SplashScreen';
import ListUsersScreen from './src/users/screens/listusers/ListUsersScreen';
import RegistroScreen from './src/auth/screens/Registro/RegistroScreen';
import PerfilScreen from './src/users/screens/perfil/PerfilScreen';
import EditScreen from './src/aparments/screens/list_aparments/editScreen/EditAparmentScreen';



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Apartamentos" component={ListApartmentsScreen} />
        <Stack.Screen name="ListUsers" component={ListUsersScreen} options={{headerShown: false}} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
