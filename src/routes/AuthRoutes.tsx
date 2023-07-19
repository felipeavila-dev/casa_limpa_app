import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { ScreenTypes } from "../@types/navigation";

export function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator<ScreenTypes>();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
        </Navigator>
    );
}