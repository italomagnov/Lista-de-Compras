import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { List } from '../components/List';
import { useState } from 'react';
import { ModalNewItem } from '../components/Modal';
import { ModalAttPrice } from '../components/ModalAttPrice';

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

interface IItem {
    name: string;
    quantity: number;
    price: number;
}

export function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalChangePriceVisible, setModalChangePriceVisible] =
        useState(true);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const [items, setItems] = useState<IItem[]>([]);
    const handleAddItem = () => {
        setItems([
            ...items,
            {
                name,
                quantity: Number(quantity),
                price: Number(price.replace(',', '.')),
            },
        ]);
        setName('');
        setPrice('');
        setQuantity('');
        handleToggleModal();
    };

    const total = items.reduce(
        (acc, value) => acc + value.quantity * value.price,
        0
    );

    const handleDeleteItem = (index: number) => {
        setItems(items.filter((item, i) => i !== index));
    };

    const handleToggleModal = () => {
        setModalVisible((prevState) => !prevState);
    };

    const handleQuantityIncrease = (index: number) => {
        const newQuantity = [...items];

        newQuantity[index].quantity++;

        setItems(newQuantity);
    };

    const handleQuantityDecrease = (index: number) => {
        const newQuantity = [...items];

        newQuantity[index].quantity--;

        setItems(newQuantity);
    };

    const handleToggleModalChangePrice = () => {
        setModalChangePriceVisible((prevState) => !prevState);
    };

    const handleChangePrice = (index: number) => {
        setModalChangePriceVisible((prevState) => !prevState);

        console.log('clicou nesse safado ', index);
    };

    return (
        <DismissKeyboard>
            <View className="flex-1 px-8 pt-20 items-center justify-between bg-background">
                <Header />

                {items.length > 0 ? (
                    <List
                        deleteItem={handleDeleteItem}
                        itemList={items}
                        increaseItem={handleQuantityIncrease}
                        decreaseItem={handleQuantityDecrease}
                        total={total}
                        openModalChangePrice={handleChangePrice}
                    />
                ) : (
                    <Image source={require('../assets/emptyList.png')} />
                )}

                <ModalNewItem
                    toggleMode={handleToggleModal}
                    isOpen={modalVisible}
                    addItem={handleAddItem}
                    valueName={name}
                    valueQuantity={quantity}
                    valuePrice={price}
                    changeName={setName}
                    changePrice={setPrice}
                    changeQuantity={setQuantity}
                />

                <ModalAttPrice
                    toggleMode={handleToggleModalChangePrice}
                    isOpen={modalChangePriceVisible}
                    valuePrice={price}
                    changePrice={setPrice}
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
