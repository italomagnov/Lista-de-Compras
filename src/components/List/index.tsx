import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

import { View, Text, ScrollView } from 'react-native';

export function List(props: any) {
    return (
        <View className="flex-1 h-4/6 flex flex-col pt-12">
            {/* item lista */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {props.itemList.map((item: any, index: number) => {
                    return (
                        <View
                            key={index}
                            className="w-full h-20 px-6 mb-4 flex-row justify-between items-center bg-violet-200 rounded-3xl"
                        >
                            <View className="flex">
                                <Text className="text-2xl font-bold text-background">
                                    R$ {item.price.toFixed(2)}
                                </Text>
                                <Text className="text-xl     font-semibold text-background">
                                    {item.name}
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-4">
                                {/* botões adicionar/remover */}
                                <View className="flex flex-row items-center justify-around">
                                    {/* botão diminuir quantidade */}
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        className="bg-violet-100 rounded-full p-2"
                                        onPress={() =>
                                            props.decreaseItem(index)
                                        }
                                    >
                                        <Feather
                                            name="minus"
                                            size={32}
                                        />
                                    </TouchableOpacity>
                                    <Text className="mx-4 text-3xl text-center font-bold text-background">
                                        {item.quantity}
                                    </Text>
                                    {/* botão de aumentar quantidade */}
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        className="bg-violet-100 rounded-full p-2"
                                        onPress={() =>
                                            props.increaseItem(index)
                                        }
                                    >
                                        <Feather
                                            name="plus"
                                            size={32}
                                        />
                                    </TouchableOpacity>
                                </View>

                                {/* botão de excluir */}
                                <View>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => props.deleteItem(index)}
                                    >
                                        <Feather
                                            name="trash"
                                            size={24}
                                            color={colors.red[900]}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
            <Text className="py-12 text-center text-2xl font-bold text-violet-200">
                Total: R$ {props.total.toFixed(2)}
            </Text>
        </View>
    );
}
