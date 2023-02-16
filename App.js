import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NativeBaseProvider, Text, Box, HStack, VStack } from "native-base";
import { View} from 'react-native';
import SplashScreen from './components/initStack/splash';
import OnboardingScreen1 from './components/initStack/onboardingScreen1';
import OnboardingScreen2 from './components/initStack/onboardingScreen2';
import SignUp from './components/signupStack/signup';
import SignIn from './components/signinStack/signin';
import Verify from './components/signupStack/verify';
import ProfileScreen1 from './components/profileStack/profileScreen1';
import ProfileScreen2 from './components/profileStack/profileScreen2';
import ProfileScreen3 from './components/profileStack/profileScreen3';
import MyTabs from './components/dashboardStack/bottomNav';
import {NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default function App() {
  return (  
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens
        animationEnabled
        gestureEnabled
        animationTypeForReplace={'push'}
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Mytabs" component={MyTabs} />
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />

        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Verify" component={Verify} />

        <Stack.Screen name="Signin" component={SignIn} />

        <Stack.Screen name="Profile1" component={ProfileScreen1} />
        <Stack.Screen name="Profile2" component={ProfileScreen2} />
        <Stack.Screen name="ProfileComplete" component={ProfileScreen3} />

        

      </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}




