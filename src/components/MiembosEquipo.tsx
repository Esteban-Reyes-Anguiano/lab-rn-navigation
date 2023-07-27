import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

const MiembrosEquipo = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${user.name} ${user.lastName}`}</Text>
        <Text style={styles.info}>Email: {user.email}</Text>
        <Text style={styles.info}>Phone: {user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2E2E2E', // Gris oscuro
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#000000', // Negro
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF', // Blanco
  },
  info: {
    fontSize: 14,
    color: '#A0A0A0', // Gris claro
    fontWeight: '500',
  },
});

export default MiembrosEquipo;
