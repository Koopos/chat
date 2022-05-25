import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "../screens/ModalScreen";

const Stack = createNativeStackNavigator()

export default () => {
    return <Stack.Navigator>
        <Stack.Screen name="modal1" component={ModalScreen} />
        <Stack.Group screenOptions={{presentation: "modal"}}>
            <Stack.Screen name="modal2" component={ModalScreen} />
        </Stack.Group>
       
    </Stack.Navigator>
}