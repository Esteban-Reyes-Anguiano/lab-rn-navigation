import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import inicioScreen from "../screens/inicio";
import perfilScreen from "../screens/perfil";
import equipoScreen from "../screens/equipo";



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="inicio" component={inicioScreen} />
        <Stack.Screen name="Perfil" component={perfilScreen} />
        <Stack.Screen name="Equipo" component={equipoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;