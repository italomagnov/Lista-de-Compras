import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ButtonProps = {
    text: string;
};

export function Button(props: ButtonProps) {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="w-full bg-violet-500 shadow-md shadow-violet-500/50 px-28 py-6 rounded-xl"
            onPress={() => navigate('new')}
        >
            <Text className="text-xs text-center font-extrabold text-violet-200">
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

// absolute bottom-20 w-full items-center
