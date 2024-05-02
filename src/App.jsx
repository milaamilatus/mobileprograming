import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Akun from './screens/Akun';
import Penjualan from './screens/Penjualan';

const stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'green'}}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Penjualan"
        component={Penjualan}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="akun" size={size} color={color} />
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
