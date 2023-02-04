import {
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    LogBox,
} from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { List } from '../components/List';
import { useState } from 'react';
import { ModalNewItem } from '../components/Modal';
import { ModalAttPrice } from '../components/ModalAttPrice';
import uuid from 'react-native-uuid';

const DismissKeyboard = ({ children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

interface IItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalChangePriceVisible, setModalChangePriceVisible] =
        useState(false);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const [items, setItems] = useState<IItem[]>([]);

    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [newPrice, setNewPrice] = useState('');

    const handleAddItem = () => {
        const newData = {
            id: uuid.v4().toString(),
            name,
            quantity: Number(quantity),
            price: Number(price.replace(',', '.')),
        };

        setItems([...items, newData]);

        console.log(items);

        setName('');
        setPrice('');
        setQuantity('');
        handleToggleModal();
    };

    const total = items.reduce(
        (acc, value) => acc + value.quantity * value.price,
        0
    );

    const handleDeleteItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleToggleModal = () => {
        setModalVisible((prevState) => !prevState);
    };

    const handleQuantityIncrease = (id: string) => {
        const newQuantity = [...items];
        const foundItem = newQuantity.find((item) => item.id === id);

        if (foundItem && foundItem.quantity !== undefined) {
            foundItem.quantity++;
        }

        setItems(newQuantity);
    };

    const handleQuantityDecrease = (id: string) => {
        const newQuantity = [...items];
        const foundItem = newQuantity.find((item) => item.id === id);

        if (foundItem && foundItem.quantity !== undefined) {
            foundItem.quantity--;
        }

        setItems(newQuantity);
    };

    const handleToggleChangePriceModal = (id: string) => {
        setSelectedItemId(id);
        setNewPrice('');

        setModalChangePriceVisible((prevState) => !prevState);
    };

    const handleChangePrice = (id: string, newPrice: number) => {
        const newItems = [...items];
        const foundItem = newItems.find((item) => item.id === id);

        if (foundItem) {
            foundItem.price = newPrice;
        }

        setItems(newItems);
    };

    const handleConfirmChangePrice = () => {
        if (selectedItemId) {
            handleChangePrice(
                selectedItemId,
                Number(newPrice.replace(',', '.'))
            );
        }
        setModalChangePriceVisible(false);
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
                        toggleModalChangePrice={handleToggleChangePriceModal}
                    />
                ) : (
                    <Image source={require('../assets/emptyList.png')} />
                )}

                <ModalNewItem
                    toggleMode={handleToggleModal}
                    isOpen={modalVisible}
                    valueName={name}
                    valueQuantity={quantity}
                    valuePrice={price}
                    changeName={setName}
                    changePrice={setPrice}
                    changeQuantity={setQuantity}
                    addItem={handleAddItem}
                />

                <ModalAttPrice
                    toggleMode={handleToggleChangePriceModal}
                    valuePrice={newPrice}
                    newPrice={setNewPrice}
                    isOpen={modalChangePriceVisible}
                    handleChangePrice={handleConfirmChangePrice}
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
