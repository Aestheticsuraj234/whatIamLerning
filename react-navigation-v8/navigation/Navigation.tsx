import { createNativeStackNavigator, createNativeStackScreen } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createStaticNavigation } from "@react-navigation/native";
import SettingScreen from "./screens/SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";


type RootStackType = typeof RootStack;

declare module "@react-navigation/core"{
    interface RootNavigator extends RootStackType {}
}


const Tabs = createBottomTabNavigator({
  screens: {
  Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({ focused, color, size }) => Platform.select({
          ios: { type: "sfSymbol", name: "house.fill" },
          android: { type: "materialSymbol", name: "home" },
          default: { type: "image", source: require("./icons/home.png") },
        }),
      },
    },
   
  },
});


const RootStack = createNativeStackNavigator({
    screens:{
        Home:createNativeStackScreen({
            screen:HomeScreen,
            options:{
                title:"Suraj",
                
            }
        }),
         Settings:createNativeStackScreen({
            screen:SettingScreen,
            options:{
                title:"Settings Screen",
                
            }
        })
    }
})

export const Navigation = createStaticNavigation(RootStack)