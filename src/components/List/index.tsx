import { TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export function List() {
    return (
        <View className="w-full h-4/6 flex flex-col pt-12">
            {/* item lista */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
                <DismissKeyboard>
                    <View className="w-full mb-2 flex flex-row justify-between items-center px-8 py-4 bg-violet-200 rounded-3xl">
                        <View className="flex gap-2">
                            <Text className="text-2xl font-bold text-background">
                                R$ 2,99
                            </Text>
                            <Text className="text-base text-background">
                                Arroz Seu Juquinha
                            </Text>
                        </View>
                        <View className="w-full flex flex-row items-center justify-between">
                            <TextInput
                                className="w-1/2 text-3xl text-center font-bold text-background"
                                keyboardType="numeric"
                            >
                                0
                            </TextInput>
                            <TouchableOpacity
                                className="w-1/2"
                                activeOpacity={0.7}
                            >
                                <Feather
                                    name="trash"
                                    size={24}
                                    color={colors.red[900]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
            </ScrollView>
        </View>
    );
}
