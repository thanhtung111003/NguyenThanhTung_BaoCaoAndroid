import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Component/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './Component/Footer';
import Home from './Component/Home';
import ProductDetail from './Component/detailProduct/ProductDetail';
import Login from './Component/Login';
import CartProduct from './Component/cartProduct/CartProduct';
import SettingsScreen from './Component/setting/SettingsScreen';
import Register from './Component/Register';
import RegisterSuccess from './Component/RegisterSuccess';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CartProduct" component={CartProduct} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />

      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;