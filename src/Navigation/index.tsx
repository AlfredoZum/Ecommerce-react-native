import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { defaultStackNavigationOptions } from './navigationOptions';

// Screen
import HomeScreen from '../View/HomeScreen/Home';
import ProductScreen from '../View/ProductDetailScreen/ProductDetail';

type RootStackParamList = {
  Home: undefined;
  ProductDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'Home' }}
        />
         <Stack.Screen
          name="ProductDetail"
          component={ProductScreen}
          options={{ headerTitle: 'Detalle' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
