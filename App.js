import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quote from './components/quote';
import QuoteScreen from './screens/QuoteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionsScreen from './screens/OptionsScreen';
import StartScreen from './screens/StartScreen';
import AddQuoteScreen from "./screens/AddQuoteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Quote" component={QuoteScreen} />
            <Stack.Screen name="Options" component={OptionsScreen} />
            <Stack.Screen name="AddQuote" component={AddQuoteScreen} />

          </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
