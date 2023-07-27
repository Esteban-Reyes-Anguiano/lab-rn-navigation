import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TitleProps {
  title: string;
}

const ScreenTitle = ({ title }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929', 
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 30,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#A020F0',  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#A020F0', 
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default ScreenTitle;
