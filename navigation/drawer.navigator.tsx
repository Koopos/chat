import { createDrawerNavigator } from '@react-navigation/drawer'
import { BottomTabNavigator } from './index'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{gestureEnabled: false}}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
        </Drawer.Navigator>
    )
}