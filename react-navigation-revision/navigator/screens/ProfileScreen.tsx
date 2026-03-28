import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Button
        title="Edit Profile"
        onPress={() =>
          navigation.navigate("EditProfile", { userId: 123 })
        }
      />
    </View>
  );
}