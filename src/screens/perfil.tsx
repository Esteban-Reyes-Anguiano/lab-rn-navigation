import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import UserCard from '../components/CardInfo';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import ScreenTitle from '../components/Titulo';
import CustomButton from '../components/CustomButton';

// Utils
import { ProfileScreenNavigationProp } from '../functions/functions';

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Perfil = ({ navigation }: Props) => {
  const user = {
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    phone: '(55) 1234-5678',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserCard user={user} />
      <CustomButton
        title="Regresar"
        onPress={() => navigation.navigate('inicio')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929', // Negro intenso
  },
});

export default Perfil;
