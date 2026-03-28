import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Drawer = createDrawerNavigator();


export default function DrawerNavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    )
}