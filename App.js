import React from 'react';
import QuoteScreen from './screens/QuoteScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import AddQuoteScreen from "./screens/AddQuoteScreen";
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();

Font.loadAsync({
    'Comfortaa': require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    'Caveat-Regular': require('./assets/fonts/Caveat-Regular.ttf'),
})

export default function App() {
    return (
        <NavigationContainer>
            {
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{title: 'Start'}}
                    />
                    <Stack.Screen name="Quote" component={QuoteScreen}/>
                    <Stack.Screen name="AddQuote" component={AddQuoteScreen}/>

                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}
