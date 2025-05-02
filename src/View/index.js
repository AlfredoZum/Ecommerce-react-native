import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen/Home';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'Ecommerce'}}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
              fontFamily: 'System',
            },
            headerTitle: 'Mi Perfil', // Título personalizado
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={() => alert('Guardar')}>
                <FontAwesomeIcon icon={faMugSaucer} />
              </TouchableOpacity>
            ),
          }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;