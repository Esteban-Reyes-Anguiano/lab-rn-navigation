import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componets
import ScreenTitle from './Titulo';

interface User {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
}

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ScreenTitle title={`${user.name} ${user.lastName}`} />
        <Text style={styles.info}>Email: {user.email}</Text>
        <Text style={styles.info}>Telefono: {user.phone}</Text>
      </View>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2E2E', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  infoContainer: {
    flex: 1, 
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    borderWidth: 4,
    borderColor: '#A020F0', 
  },
  info: {
    fontSize: 14,
    color: '#A0A0A0', 
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

export default UserCard;
