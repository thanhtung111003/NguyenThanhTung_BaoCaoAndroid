import React, { useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Image,
    Text,
<<<<<<< HEAD
    StyleSheet,
    ScrollView,
    TouchableOpacity
=======
    StyleSheet
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ProductDetail = ({ route, navigation }) => {
    // Create an Increment and Decrement Button
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const loadCartItems = async () => {
            try {
                const cartData = await AsyncStorage.getItem('cart');
                if (cartData) {
                    const parsedCart = JSON.parse(cartData);

                    // Kiểm tra và đặt số lượng thành 1 nếu nó là 0 hoặc không tồn tại
                    const updatedCart = parsedCart.map(item => ({
                        ...item,
                        quantity: item.quantity || 1,
                    }));

                    setCartItems(updatedCart);
                }
            } catch (error) {
                console.error('Lỗi khi đọc dữ liệu giỏ hàng:', error);
            }
        };

        loadCartItems();
    }, []);

    const handleDecreaseQuantity = (itemId) => {
        // Giảm số lượng của sản phẩm trong giỏ hàng
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                // Đảm bảo số lượng không nhỏ hơn 1
                const newQuantity = Math.max(1, item.quantity - 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCartItems(updatedCart);

        // Lưu giỏ hàng mới vào AsyncStorage
        AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
            .then(() => {
                console.log('Số lượng sản phẩm đã được giảm');
            })
            .catch((error) => {
                console.error('Lỗi khi lưu giỏ hàng mới:', error);
            });
    };

    const handleIncreaseQuantity = (itemId) => {
        // Tăng số lượng của sản phẩm trong giỏ hàng
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);

        // Lưu giỏ hàng mới vào AsyncStorage
        AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
            .then(() => {
                console.log('Số lượng sản phẩm đã được tăng');
            })
            .catch((error) => {
                console.error('Lỗi khi lưu giỏ hàng mới:', error);
            });
    };

    // Add To Cart
    const addToCart = async (product) => {
        try {
            // Đọc giỏ hàng hiện tại từ AsyncStorage
            const existingCart = await AsyncStorage.getItem('cart');
            const cart = existingCart ? JSON.parse(existingCart) : [];
<<<<<<< HEAD
    
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
            if (existingProductIndex !== -1) {
                // Nếu sản phẩm đã tồn tại, tăng số lượng của nó
                cart[existingProductIndex].quantity += 1;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
                cart.push(product);
            }
    
            // Lưu giỏ hàng mới vào AsyncStorage
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
    
            console.log('Thêm sản phẩm thành công!');
=======

            // Thêm sản phẩm vào giỏ hàng
            cart.push(product);

            // Lưu giỏ hàng mới vào AsyncStorage
            await AsyncStorage.setItem('cart', JSON.stringify(cart));

            console.log('Thêm sản phẩm thành công!');
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
        } catch (error) {
            console.error('Lỗi khi thêm vào giỏ hàng:', error);
        }
        navigation.navigate('CartPage');
    };

    const { item } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <View style={style.header}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate('CartPage')} />
            </View> */}
<<<<<<< HEAD
            <ScrollView>
                <View style={style.container}>
                    <Image source={{ uri: item.images[0] }} style={style.productImage} resizeMode="cover" />
                </View>
                <View style={style.detailsContainer}>
                    <View
                        style={{
                            marginLeft: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            width: 250
                        }}>
                            {item.title}
                        </Text>
                        <View style={style.priceTag}>
                            <Text
                                style={{
                                    marginLeft: 15,
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}>
                                ${item.price}
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                        <Text
                            style={{
                                color: 'grey',
                                fontSize: 16,
                                lineHeight: 22,
                                marginTop: 10,
                            }}>
                            {item.description}
                        </Text>
                        <View
                            style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity style={style.borderBtn} onPress={() => handleDecreaseQuantity(item.id)}>
                                    <AntDesign name="minus" size={18} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>1</Text>
                                <TouchableOpacity style={style.borderBtn} onPress={() => handleIncreaseQuantity(item.id)}>
                                    <AntDesign name="plus" size={18} color="black" />
                                </TouchableOpacity>
                            </View>

                            <View style={style.buyBtn}>
                                <Text
                                    onPress={() => addToCart(item)}
                                    style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
                                    Add To Cart
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
=======

            <View style={style.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={{ resizeMode: 'contain', flex: 1 }}
                />
            </View>
            <View style={style.detailsContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        width: 250
                    }}>
                        {item.title}
                    </Text>
                    <View style={style.priceTag}>
                        <Text
                            style={{
                                marginLeft: 15,
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            ${item.price}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 16,
                            lineHeight: 22,
                            marginTop: 10,
                        }}>
                        {item.description}
                    </Text>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <View style={style.borderBtn} onPress={() => handleDecreaseQuantity(item.id)}>
                                <AntDesign name="minus" size={18} color="black" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: 10,
                                    fontWeight: 'bold',
                                }}>
                                1
                            </Text>
                            <View style={style.borderBtn} onPress={() => handleIncreaseQuantity(item.id)}>
                                <AntDesign name="plus" size={18} color="black" />
                            </View>
                        </View>

                        <View style={style.buyBtn}>
                            <Text
                                onPress={() => addToCart(item)}
                                style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
                                Add To Cart
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
<<<<<<< HEAD
    productImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
=======
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: '#ddd',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: '#fff',
        marginBottom: 5,
        marginRight: 3,
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    priceTag: {
        backgroundColor: '#fff',
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
});

export default ProductDetail;