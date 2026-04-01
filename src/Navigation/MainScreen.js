import React from 'react';
import NavigationString from './NavigationString';
import * as Screen from "../Screens"
// import BottomTab from "./BottomTab"
export default function MainScreen(Stack) {
    return (
        <>
         <Stack.Screen 
          name={NavigationString.SplashScreen}
          component={Screen.SplashScreen}
          options={{ headerShown: false }}
         />
         <Stack.Screen 
          name={NavigationString.IntroScreen}
          component={Screen.IntroScreen}
          options={{ headerShown: false }}
         />
         <Stack.Screen 
          name={NavigationString.Login}
          component={Screen.Login}
          options={{ headerShown: false }}
         />
         <Stack.Screen 
          name={NavigationString.SignUp}
          component={Screen.SignUp}
          options={{ headerShown: false }}
         />
        
        </>
   
    );
}