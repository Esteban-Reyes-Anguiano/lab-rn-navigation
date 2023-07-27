import React from 'react';
import { Button, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import UserCard from '../components/CardInfo';
import CustomButton from '../components/CustomButton';

//Utils
import { TeamScreenNavigationProp } from '../functions/functions';

interface Props {
  navigation: TeamScreenNavigationProp;
}

const Equipo = ({ navigation }: Props) => {
  const teamMembers = [
    {
      name: 'Juan',
      lastName: 'Gómez',
      email: 'juan.gomez@example.com',
      phone: '(55) 1234-5678',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      name: 'María',
      lastName: 'Sánchez',
      email: 'maria.sanchez@example.com',
      phone: '(55) 9876-5432',
      avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
    {
      name: 'Carlos',
      lastName: 'López',
      email: 'carlos.lopez@example.com',
      phone: '(55) 8765-4321',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      name: 'Laura',
      lastName: 'Hernández',
      email: 'laura.hernandez@example.com',
      phone: '(55) 6543-7890',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: 'Alejandro',
      lastName: 'Ramírez',
      email: 'alejandro.ramirez@example.com',
      phone: '(55) 7890-1234',
      avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    {
      name: 'Fernanda',
      lastName: 'Díaz',
      email: 'fernanda.diaz@example.com',
      phone: '(55) 2345-6789',
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teamMembers}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
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
    backgroundColor: '#1F1F1F', // Gris oscuro
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default Equipo;
