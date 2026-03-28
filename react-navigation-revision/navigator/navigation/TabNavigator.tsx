import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DetailsScreen from "../screens/DetailsScreen";
import ProductScreen from "../screens/ProductScreen";

import { HomeStack } from "../screens/HomeStack";
import { ProfileStack } from "../screens/ProfileStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
        <Tab.Screen name="ProfileTab" component={ProfileStack} />
      {/* <Tab.Screen name="Product" component={ProductScreen} /> */}
    </Tab.Navigator>
  );
}
