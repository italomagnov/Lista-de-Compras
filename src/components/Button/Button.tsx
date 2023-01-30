import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    text: string;
    toggleMode: () => void;
};

export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="w-full h-16 justify-center bg-violet-500 shadow-md shadow-violet-500/50 rounded-md"
            onPress={props.toggleMode}
        >
            <Text className="text-xs text-center font-extrabold text-violet-200">
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

// absolute bottom-20 w-full items-center
