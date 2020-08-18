import * as React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import googleMap from '../Map/googleMap';
import Setting from '../Setting/Setting';
import Cart from '../Cart/Cart';
import VectorIcon from 'react-native-vector-icons/Ionicons';

export default function Main() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Map') {
            iconName = focused ? 'md-map-sharp' : 'md-map-sharp';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'md-cart-sharp' : 'md-cart-sharp';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings';
          }
          // You can return any component that you like here!
          return <VectorIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: '#FF8C00',
        activeBackgroundColor: '#FF8C00',
      }}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Map" component={googleMap} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
