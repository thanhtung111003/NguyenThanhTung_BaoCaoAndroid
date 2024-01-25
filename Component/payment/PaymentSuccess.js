import React from 'react';
import { View, Text } from 'react-native';

<<<<<<< HEAD

=======
>>>>>>> 967496ccd6f57cce620bfcc59ac79de5f552acea
const PaymentSuccess = ({ navigation }) => {
  return (
    <View>
      <Text>Đã mua hàng thành công!</Text>
      <Text onPress={() => navigation.navigate('Home')}>Về trang chủ</Text>
    </View>
  );
};

export default PaymentSuccess;