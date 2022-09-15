import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './Home';
import {FullPost} from './FullPost';

const Stack = createNativeStackNavigator();

console.log(Stack);

export const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{title: 'News'}}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{title: 'Статья'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
