import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <>
            <Home />
            <StatusBar
                barStyle="light-content"
                backgroundColor="trasparent"
                translucent
            />
        </>
    );
}
