import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert('Finally called');
      });
  };

  const handleProductPress = (product) => {
    // Chuyển đến trang chi tiết sản phẩm và truyền thông tin sản phẩm
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.catetitle}>
        <Text style={styles.titleText}>Sản phẩm</Text>
        <TouchableOpacity>
          <Text style={styles.viewMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.productContainer}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} onPress={() => handleProductPress(product)}>
            <View style={styles.item} key={product.id}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image }} resizeMode="cover" />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>Rating: </Text>
                  <FontAwesome name="star" style={styles.starIcon} />
                  <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                  <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingHorizontal: 10,
  },
  catetitle: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 15,
  },
  titleText: {
  fontSize: 30,
  color: "black",
  fontWeight: "650",
  },
  viewMoreText: {
  fontSize: 15,
  },
  productContainer: {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  },
  item: {
  width: '100%',
  marginBottom: 10,
  borderRadius: 10,
  backgroundColor: "gray",
  overflow: "hidden",
  },
  imageContainer: {
  height: 200,
  borderRadius: 10,
  overflow: "hidden",
  },
  image: {
  flex: 1,
  },
  descriptionContainer: {
  padding: 8,
  },
  title: {
  color: "white",
  textAlign: "center",
  marginBottom: 4,
  },
  price: {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: 4,
  },
  ratingContainer: {
  flexDirection: "row",
  alignItems: "center",
  },
  ratingText: {
  color: "white",
  },
  starIcon: {
  color: "gold",
  fontSize: 16,
  marginRight: 2,
  },
  ratingValue: {
  color: "white",
  marginRight: 2,
  },
  ratingCount: {
  color: "white",
  },
  });