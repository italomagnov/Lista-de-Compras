import { View, Text } from 'react-native';

export function Header() {
    return (
        <View className="bg-background w-full flex-row items-center justify-center">
            <Text className="text-violet-100 text-2xl">Lista de Compras</Text>
        </View>
    );
}
