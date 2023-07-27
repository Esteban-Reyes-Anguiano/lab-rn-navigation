import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface User {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    avatar?: string;
  }
  
export interface Props {
    user: User;
  }

export type RootStackParamList = {
  inicio: undefined;
  Perfil: undefined;
  Equipo: undefined;
};

//HomeType
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'inicio'>;

//ProfileTypes
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;

//TeamMembersType
export type TeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Equipo'>;