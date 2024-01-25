import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const CategoryScreen = ({ route }) => {
  const { categoryId } = route.params;

  // Giả định danh sách sản phẩm của danh mục cellphones
  const products = [
    { id: 1, name: 'Product 1', image: require('../../assets/product1.jpg') },
    { id: 2, name: 'Product 2', image: require('../../assets/product2.jpg') },
    { id: 3, name: 'Product 3', image: require('../../assets/product3.jpg') },
    // Thêm sản phẩm khác tùy theo danh mục
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;