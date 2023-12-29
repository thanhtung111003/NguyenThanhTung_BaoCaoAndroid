import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetail = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (numStars) => {
    setRating(numStars);
  };

  const handleAddToCart = () => {
    // Xử lý logic thêm sản phẩm vào giỏ hàng
  };
  return (
    <View style={styles.container}>
                <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Image
        source={require('../../assets/slider03.jpg')}   
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.title}>Tên sản phẩm</Text>
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