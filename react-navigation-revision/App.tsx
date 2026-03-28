import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./navigator/navigation/StackNavigator";
import TabNavigator from "./navigator/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
