import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CartPage = ({}) => {
  const [cartItems, setCartItems] = useState([]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  // Tính tổng giá trị giỏ hàng
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name} - ${item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item)}>
        <Text style={styles.removeButton}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giỏ hàng</Text>

      {cartItems.length === 0 ? (
        <Text>Giỏ hàng của bạn trống.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <Text style={styles.total}>Tổng giá trị giỏ hàng: ${calculateTotal()}</Text>

      <Text style={styles.heading}>Danh sách sản phẩm</Text>
      <TouchableOpacity onPress={() => addToCart({ id: 1, name: 'Product A', price: 10 })}>
        <Text style={styles.addButton}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToCart({ id: 2, name: 'Product B', price: 15 })}>
        <Text style={styles.addButton}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToCart({ id: 3, name: 'Product C', price: 20 })}>
        <Text style={styles.addButton}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  removeButton: {
    color: 'red',
  },
  total: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});

export default CartPage;











// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// export default function Cart({ route }) {
//   const { cartItems } = route.params;
//   const [items, setItems] = useState(cartItems);
//   const handleRemoveFromCartPress = (productId) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//     route.params.onRemoveFromCart(productId); // Gọi hàm callback được truyền từ thành phần Home
//   };
//   useEffect(() => {
//     setItems(cartItems);
//   }, [cartItems]);
//   const handleIncreaseQuantity = (productId) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };
//   const handleDecreaseQuantity = (productId) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };
//   // const handleRemoveFromCartPress = (productId) => {
//   //   setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//   // };

//   const renderItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Image style={styles.productImage} source={{ uri: item.image }} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.title}</Text>
//         <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.quantityButton}
//         onPress={() => handleIncreaseQuantity(item.id)}
//       >
//         <Text style={styles.quantityButtonText}>+</Text>
//       </TouchableOpacity>
//       <Text style={styles.quantity}>{item.quantity}</Text>
//       <TouchableOpacity
//         style={styles.quantityButton}
//         onPress={() => handleDecreaseQuantity(item.id)}
//       >
//         <Text style={styles.quantityButtonText}>-</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleRemoveFromCartPress(item.id)}
//       >
//         <Text style={styles.deleteButtonText}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cart Page</Text>
//       {items.length > 0 ? (
//         <FlatList
//           data={items}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.cartList}
//         />
//       ) : (
//         <Text style={styles.emptyCartText}>Your cart is empty.</Text>
//       )}
//       <TouchableOpacity style={styles.checkoutButton}>
//         <Text style={styles.checkoutButtonText}>Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   emptyCartText: {fontSize: 16,
//     textAlign: 'center',
//     marginTop: 32,
//   },
//   cartList: {
//     flexGrow: 1,
//     marginTop: 16,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     marginRight: 16,
//     borderRadius: 8,
//   },
//   productDetails: {
//     flex: 1,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   productPrice: {
//     fontSize: 14,
//     marginTop: 8,
//   },
//   deleteButton: {
//     backgroundColor: '#cc0000',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//     borderRadius: 4,
//   },
//   deleteButtonText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   checkoutButton: {
//     backgroundColor: '#0066cc',
//     alignItems: 'center',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 16,
//   },
//   checkoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   quantityButton: {
//     backgroundColor: 'blue',
//     borderRadius: 8,
//     padding: 8,
//     marginRight: 8,
//   },
//   quantityButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     borderRadius: 8,
//   },
//   quantity: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });