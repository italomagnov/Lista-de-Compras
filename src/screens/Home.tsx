import { View, Image, Text } from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { List } from '../components/List';

export function Home() {
    return (
        <View className="relative flex-1 px-8 pt-20 items-center bg-background">
            <Header />
            {/* <Image
                className="my-24"
                source={require('../assets/emptyList.png')}
            /> */}

            <List />

            <Text className="py-12 text-2xl font-bold text-violet-200">
                Total: R$ 69,69
            </Text>
            <Button text="Adicionar novo item" />
        </View>
    );
}
