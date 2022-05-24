import { createDrawerNavigator } from '@react-navigation/drawer'
import { BottomTabNavigator } from './index'
import HomeDrawer from '../screens/HomeDrawer'


const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{gestureEnabled: false}} drawerContent={HomeDrawer}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}} />
        </Drawer.Navigator>
    )
}