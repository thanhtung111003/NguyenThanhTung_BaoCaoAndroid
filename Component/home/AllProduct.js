import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
=======
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
=======
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea

  useEffect(() => {
    getAllProduct();
  }, []);
<<<<<<< HEAD

=======
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
  const navigation = useNavigation();

  const getAllProduct = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
<<<<<<< HEAD
      setProducts(response.data);
      setFilteredProducts(response.data);
=======
  
      setProducts(response.data);
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
    } catch (error) {
      alert(error.message);
    }
  };
<<<<<<< HEAD

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const navigateToProductDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  const renderProduct = ({ item, navigation }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProductDetail(item)}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} resizeMode="cover" />
=======
  const navigateToProductDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
};
  const renderProduct = ({ item, navigation }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProductDetail(item)}>
      <Image source={{ uri: item.images[92] }} style={styles.productImage} />
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
<<<<<<< HEAD

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập từ khóa tìm kiếm"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Tìm kiếm" onPress={handleSearch} />
      </View>
      <FlatList
        data={filteredProducts}
=======
  return (
    <View style={styles.container}>
      <View style={styles.catetitle}>
        <Text style={styles.titleText}>Sản phẩm</Text>
        <Text style={styles.viewMoreText}>Xem thêm</Text>
      </View>
      <FlatList
        data={products}
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
        renderItem={({ item }) => renderProduct({ item, navigation })}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
<<<<<<< HEAD
      />
=======
        
      />
      



>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
<<<<<<< HEAD
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
 
    marginRight: 10,
    paddingHorizontal: 8,
=======
  catetitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '600',
  },
  viewMoreText: {
    fontSize: 15,
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
  },
  productItem: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 5,
  },
});

export default AllProduct;