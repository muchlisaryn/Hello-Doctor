import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Login, Register, Splash} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="spash">
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
