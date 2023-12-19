import * as React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import SettingScreen from './Screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const Drawer = createDrawerNavigator()


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size, focused}) => {
            // let color = ''
            if (focused) {
              color = '#495E57'
            }else {
              color = '#333'
            }
            let iconName;
            if (route.name == 'Settings') {
              iconName = "settings"
            } else if (route.name == 'Dashboard') {
              iconName = 'home'
            }
            
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          headerStyle: {backgroundColor: '#F4CE14'},
          headerTintColor: '#333',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarStyle: {
            backgroundColor: '#F4CE14'
          }
        })}
        initialRouteName='Login'
        
        >
        <Tab.Screen name='Dashboard' component={Dashboard} />
        <Tab.Screen name='Settings' component={SettingScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

