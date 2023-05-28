import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from 'common/dist/screens/LoginScreen';
import HomeScreen from 'common/dist/screens/HomeScreen';
import RegisterFirst from 'common/dist/screens/RegisterFirst';
import MobileLoginScreen from 'common/dist/screens/MobileLoginScreen';
import VerificationScreen from 'common/dist/screens/VerificationScreen';
import RegisterLastScreen from 'common/dist/screens/RegisterLastScreen';

const Stack = createNativeStackNavigator();

const HomePage = () => {
  const navigation = useNavigation();
  return <HomeScreen navigation={navigation} />;
};
const LoginPage = () => {
  const navigation = useNavigation();
  return <LoginScreen navigation={navigation} />;
};
const RegisterFirstPage = () => {
  const navigation = useNavigation();
  return <RegisterFirst navigation={navigation} />;
};
const MobileLoginPage = () => {
  const navigation = useNavigation();
  return <MobileLoginScreen navigation={navigation} />;
};
const VerificationPage = () => {
  const navigation = useNavigation();
  return <VerificationScreen navigation={navigation} />;
};
const RegisterLastPage = () => {
  const navigation = useNavigation();
  return <RegisterLastScreen navigation={navigation} />;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="RegisterFirst" component={RegisterFirstPage} />
        <Stack.Screen name="MobileLogin" component={MobileLoginPage} />
        <Stack.Screen name="Verification" component={VerificationPage} />
        <Stack.Screen name="RegisterLast" component={RegisterLastPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
