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

    toggleMode: () => void;
    itemEnviado: () => void;

    changeTitle: (text: string) => void;
    changePrice: (text: string) => void;
    changeAmount: (text: string) => void;
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
        // <View className="flex-1 px-8 pt-16 items-center justify-center">

        <Modal
            animationType="slide"
            visible={props.isOpen}
            transparent={true}
        >
            <DismissKeyboard>
                <View className="flex-1 pt-16 items-center">
                    <View className="mt-5 px-8 py-12 pt-4 bg-background rounded-md border-2 border-violet-900">
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
                            className="h-12 mt-2 pl-4 rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                            onChangeText={(text) => props.changeTitle(text)}
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
                                    className="h-12 mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                                    onChangeText={(text) =>
                                        props.changePrice(text)
                                    }
                                />
                            </View>
                            <View className="">
                                <Text className="text-violet-200 font-semibold text-base text-center">
                                    Quantidade
                                </Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="0"
                                    placeholderTextColor={colors.zinc[500]}
                                    className="h-12 mt-2 text-center rounded-lg bg-zinc-800 text-violet-200 focus:border-2 focus:border-violet-600"
                                    onChangeText={(text) =>
                                        props.changeAmount(text)
                                    }
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="h-16 flex-row items-center justify-center mt-6 bg-violet-500 shadow-md shadow-violet-500/50 rounded-md"
                            onPress={props.itemEnviado}
                        >
                            <Feather
                                name="check"
                                color={colors.violet[200]}
                            />
                            <Text className="pl-2 text-xs text-center font-extrabold text-violet-200">
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DismissKeyboard>
        </Modal>
        // </View>
    );
}
