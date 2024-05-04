import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Saya from './screens/Saya';
import Keranjang from './screens/Keranjang';
import Notifikasi from './screens/Notifikasi';

const stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'orange'}}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cart-variant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Saya"
        component={Saya}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Tab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});
