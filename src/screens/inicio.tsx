import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// Components
import ScreenTitle from '../components/Titulo';
import CustomButton from '../components/CustomButton';

import { HomeScreenNavigationProp } from '../functions/functions';

interface Props {
  navigation: HomeScreenNavigationProp;
}

const inicio = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXjDh9h2aXwWb0IjcjqZNzy_-AuvPdzqMG4Miy66mLixZo0pZ0qYZPhHiM8iHDucrcBQ&usqp=CAU' }} // Reemplaza 'URL_DE_LA_IMAGEN_DEL_ESPACIO' con la URL de la imagen del espacio
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScreenTitle title="Navigate App" />
        <CustomButton
          title="Ir al Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
        <CustomButton
          title="Ir a Mi Equipo de Trabajo "
          onPress={() => navigation.navigate('Equipo')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default inicio;
