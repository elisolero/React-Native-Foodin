import react from 'react';
import {createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions : {
        header : null
    }
}

const Login = {
    screen: LoginScreen,
    navigationOptions : {
        header : null
    }
}

const RootConfig = {
    initialRoot : 'Splash'
};

const AppNavigator = createStackNavigator({
    Splash: Splash,
    Login : Login
},RootConfig);

export default createAppContainer(AppNavigator);
