import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { BackButton } from '../components/BackButton';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

export function New() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View>
                    <BackButton />

                    <Text className="mt-6 text-violet-200 font-bold text-3xl">
                        Adicionar novo item
                    </Text>

                    <Text className="mt-6 text-violet-200 font-semibold text-base">
                        Qual item você deseja adicionar?
                    </Text>
                    <TextInput
                        placeholder="arroz, carne, leite..."
                        placeholderTextColor={colors.zinc[500]}
                        className="h-12 mt-2 pl-4 rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                    />

                    <View className="flex-row items-center justify-between">
                        <View className="w-2/3">
                            <Text className="mt-6 text-violet-200 font-semibold text-base">
                                R$
                            </Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="0,00"
                                placeholderTextColor={colors.zinc[500]}
                                className="h-12 mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                            />
                        </View>
                        <View className="">
                            <Text className="mt-6 text-violet-200 font-semibold text-base text-center">
                                Quantidade
                            </Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="0"
                                placeholderTextColor={colors.zinc[500]}
                                className="h-12 mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-full h-16 flex-row items-center justify-center mt-6 bg-violet-500 shadow-md shadow-violet-500/50 rounded-md"
                >
                    <Feather
                        name="check"
                        color={colors.violet[200]}
                    />
                    <Text className="pl-2 text-xs text-center font-extrabold text-violet-200">
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
