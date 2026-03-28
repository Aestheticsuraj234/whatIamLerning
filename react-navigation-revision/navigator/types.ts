import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';

// ==================== Stack Navigator Types ====================
export type RootStackParamList = {
  HomeMain: undefined;
  Details: { id: number };
};

export type HomeStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type HomeScreenProps = HomeStackScreenProps<'HomeMain'>;
export type DetailsScreenProps = HomeStackScreenProps<'Details'>;

// ==================== Profile Stack Types ====================
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: { userId: number };
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = NativeStackScreenProps<
  ProfileStackParamList,
  T
>;

export type ProfileScreenProps = ProfileStackScreenProps<'ProfileMain'>;
export type EditProfileScreenProps = ProfileStackScreenProps<'EditProfile'>;

// ==================== Tab Navigator Types ====================
export type RootTabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> = BottomTabScreenProps<
  RootTabParamList,
  T
>;

// ==================== Drawer Navigator Types ====================
export type RootDrawerParamList = {
  Home: undefined;
  Details: { id?: number };
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> = DrawerScreenProps<
  RootDrawerParamList,
  T
>;
