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
    handleChangePrice: () => void;

    newPrice: (text: string) => void;
    valuePrice: string;
};

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export function ModalAttPrice(props: ModalProps) {
    return (
        <Modal
            animationType="slide"
            visible={props.isOpen}
            transparent={true}
        >
            <DismissKeyboard>
                <View className="w-11/12 m-auto h-full pt-16 items-center">
                    <View className="w-full flex flex-col items-center mt-5 px-8 py-12 pt-4 bg-background rounded-3xl border-2 border-violet-900">
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
                            Atualizar Preço
                        </Text>

                        <View className="flex-row items-center justify-between mt-2">
                            <View className="w-full">
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
                                        props.newPrice(text)
                                    }
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="w-full h-16 flex-row items-center justify-center mt-6 bg-violet-500 shadow-md shadow-violet-500/50 rounded-md"
                            onPress={props.handleChangePrice}
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
        // </View>
    );
}
