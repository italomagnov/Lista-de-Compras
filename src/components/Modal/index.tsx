import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';

type ModalProps = {
    isOpen: boolean;
    valueName: string;
    valuePrice: string;
    valueQuantity: string;

    toggleMode: () => void;
    addItem: () => void;
    changeName: (text: string) => void;
    changePrice: (text: string) => void;
    changeQuantity: (text: string) => void;
};

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export function ModalNewItem(props: ModalProps) {
    return (
        <Modal
            animationType="slide"
            visible={props.isOpen}
            transparent={true}
        >
            <DismissKeyboard>
                <View className="w-11/12 m-auto h-full pt-16 items-center">
                    <View className="w-full mt-5 px-8 py-12 pt-4 bg-background rounded-3xl border-2 border-violet-900">
                        <TouchableOpacity
                            className="w-full mb-6"
                            activeOpacity={0.7}
                            onPress={props.toggleMode}
                        >
                            <Feather
                                name="x"
                                size={24}
                                color={colors.violet[200]}
                            />
                        </TouchableOpacity>

                        <Text className="text-violet-200 font-bold text-3xl">
                            Adicionar novo item
                        </Text>

                        <Text className="mt-6 text-violet-200 font-semibold text-base">
                            Qual item você deseja adicionar?
                        </Text>
                        <TextInput
                            placeholder="arroz, carne, leite..."
                            placeholderTextColor={colors.zinc[500]}
                            className="h-12 text-2xl mt-2 pl-4 rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                            value={props.valueName}
                            onChangeText={(text) => props.changeName(text)}
                        />

                        <View className="flex-row items-center justify-between mt-2">
                            <View className="w-2/3">
                                <Text className="text-violet-200 font-semibold text-base">
                                    R$
                                </Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="0,00"
                                    placeholderTextColor={colors.zinc[500]}
                                    className="h-12 text-2xl mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                                    value={props.valuePrice}
                                    onChangeText={(text) =>
                                        props.changePrice(text)
                                    }
                                />
                            </View>
                            <View className="w-1/4">
                                <Text className="text-violet-200 font-semibold text-base text-center">
                                    Quantidade
                                </Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="0"
                                    placeholderTextColor={colors.zinc[500]}
                                    className="h-12 text-2xl mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                                    value={props.valueQuantity}
                                    onChangeText={(text) =>
                                        props.changeQuantity(text)
                                    }
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="h-16 flex-row items-center justify-center mt-6 bg-violet-500 shadow-md shadow-violet-500/50 rounded-md"
                            onPress={props.addItem}
                        >
                            <Feather
                                name="check"
                                color={colors.violet[200]}
                            />
                            <Text className="pl-2 text-sm text-center font-extrabold text-violet-200">
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DismissKeyboard>
        </Modal>
    );
}
