import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      {/* Go to Details (same tab stack) */}
      <Button
        title="Go to Details (ID: 101)"
        onPress={() =>
          navigation.navigate("Details", { id: 101 })
        }
      />

      {/* Switch tab + open nested screen */}
      <Button
        title="Go to Edit Profile"
        onPress={() =>
          navigation.navigate("ProfileTab", {
            screen: "EditProfile",
            params: { userId: 999 }
          })
        }
      />
    </View>
  );
}