// import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./navigator/navigation/StackNavigator";
import TabNavigator from "./navigator/navigation/TabNavigator";
import DrawerNavigator from "./navigator/navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
