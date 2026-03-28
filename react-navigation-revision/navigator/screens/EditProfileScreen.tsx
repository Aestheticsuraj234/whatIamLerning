import { View, Text } from 'react-native';

export default function EditProfileScreen({ route }) {
  const { userId } = route.params;

  return (
    <View>
      <Text>Edit Profile</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}