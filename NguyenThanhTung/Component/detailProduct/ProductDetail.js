import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({route}) => {
  const [rating, setRating] = useState(0);
  const {product} = route.params;
  const [cartItems, setCartItems] = useState([]);
  const handleRating = (numStars) => {
    setRating(numStars);
  };
  const navigation = useNavigation();
  // const handleAddToCart = () => {
  //   navigation.navigate('CartProduct');
  // };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
if (existingItem) {
  // Nếu mặt hàng đã tồn tại trong giỏ hàng, tăng số lượng lên 1
  setCartItems((prevCartItems) =>
    prevCartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
} else {
  // Nếu mặt hàng không tồn tại trong giỏ hàng, thêm nó với số lượng là 1
  setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
}
alert('Sản phẩm đã được thêm vào giỏ hàng');
};
const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };
  const handleCart = () => {
    navigation.navigate('Cart', {
      cartItems,
      onRemoveFromCart: handleRemoveFromCart, // Pass the callback function to the Cart component
    });
  };


  return (
    <View style={styles.container}>
                <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Image
        source={{uri:product.images[0]}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.title}>Tên sản phẩm: </Text>
        
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity key={num} onPress={() => handleRating(num)}>
              <Image
                source={
                  num <= rating
                    ? require('../../assets/star_filled.png')
                    : require('../../assets/star_outline.png')
                }
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Thêm phần hiển thị thông tin chi tiết sản phẩm */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    marginBottom: 16,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;