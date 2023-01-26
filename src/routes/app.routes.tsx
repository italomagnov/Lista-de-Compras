import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { Item } from '../screens/Item';
import { New } from '../screens/New';

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="item"
                component={Item}
            />

            <Screen
                name="new"
                component={New}
            />
        </Navigator>
    );
}
