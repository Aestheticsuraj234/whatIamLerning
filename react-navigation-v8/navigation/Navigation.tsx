import { createNativeStackNavigator, createNativeStackScreen } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createStaticNavigation } from "@react-navigation/native";
import SettingScreen from "./screens/SettingScreen";


type RootStackType = typeof RootStack;

declare module "@react-navigation/core"{
    interface RootNavigator extends RootStackType {}
}

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