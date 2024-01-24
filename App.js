/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/component/screens/SignIn';
import SignUp from './src/component/screens/SignUp';
import Verified from './src/component/screens/Verified';
import Otp from './src/component/screens/Otp';
import WishList from './src/component/screens/WishList';
import TopDeals from './src/component/screens/TopDeals';
import Brands from './src/component/screens/Brands';
import BrandView from './src/component/screens/BrandView';
import MyTab from './src/component/screens/MyTab';
import Description from './src/component/screens/Description';
import Profile from './src/component/screens/Profile';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Navigator screenOptions={{
        // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
        headerShown: false
      }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false, transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verified" component={Verified} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Home" component={MyTab} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="TopDeals" component={TopDeals} />
        <Stack.Screen name="Brands" component={Brands} />
        <Stack.Screen name="BrandView" component={BrandView} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Profile" component={Profile} />


      </Stack.Navigator>
    </NavigationContainer >


  );
};



export default App;
