
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainScreen from './MainScreen';


const Stack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>          
            <Stack.Navigator
              // card styles for the ios horizontal left to right screen swift via navigation
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                {MainScreen(Stack)}
            </Stack.Navigator>   
        </NavigationContainer>
    );
};

export default Route;