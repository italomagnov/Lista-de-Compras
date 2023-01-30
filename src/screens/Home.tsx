import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { List } from '../components/List';
import { useState } from 'react';
import { ModalNewItem } from '../components/Modal';
import uuid from 'react-native-uuid';

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

interface IListItem {
    id: string;
    title: string;
    amount: number;
    price: number;
}

export function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const [item, setItem] = useState<IListItem[]>([]);

    const handleAddItem = (
        id: string,
        title: string,
        amount: number,
        price: number
    ) => {
        const newItem: IListItem = { id, title, amount, price };
        setItem([...item, newItem]);
    };

    const handleSubmit = () => {
        const newId = uuid.v4();

        handleAddItem(
            newId.toString(),
            title,
            parseInt(amount),
            parseFloat(price)
        );

        handleToggleModal();
        console.log('Item Enviado', item);
    };

    const handleToggleModal = () => {
        setModalVisible((prevState) => !prevState);
    };

    const handleDeleteItem = (id: string) => {
        setItem(item.filter((item) => item.id !== id));
        console.log('clicou', id);
    };

    const changeTitle = (text: string) => {
        setTitle(text);
    };
    const changePrice = (text: string) => {
        setPrice(text);
    };
    const changeAmount = (text: string) => {
        setAmount(text);
    };

    return (
        <DismissKeyboard>
            <View className="flex-1 px-8 pt-20 items-center justify-between bg-background">
                <Header />

                {item.length > 0 ? (
                    <List
                        deleteItem={handleDeleteItem}
                        itemList={item}
                    />
                ) : (
                    <Image source={require('../assets/emptyList.png')} />
                )}

                <ModalNewItem
                    toggleMode={handleToggleModal}
                    isOpen={modalVisible}
                    itemEnviado={handleSubmit}
                    changeTitle={changeTitle}
                    changePrice={changePrice}
                    changeAmount={changeAmount}
                />

                <View className="w-full mb-20">
                    <Button
                        toggleMode={handleToggleModal}
                        text="Adicionar Item"
                    />
                </View>
            </View>
        </DismissKeyboard>
    );
}
