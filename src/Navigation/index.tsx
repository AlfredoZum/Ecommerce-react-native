import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../View/HomeScreen/Home';
import { defaultStackNavigationOptions } from './navigationOptions';

type RootStackParamList = {
  Home: undefined;
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
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
