import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>

      {/* Push same screen again with new param */}
      <Button
        title="Open Again with ID 202"
        onPress={() =>
          navigation.push("Details", { id: 202 })
        }
      />
    </View>
  );
}