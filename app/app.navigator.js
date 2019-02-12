import react from 'react';
import {createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from './screens/splash.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions : {
        header : null
    }
}
const RootConfig = {
    initialRoot : 'Splash'
};
const AppNavigator = createStackNavigator({
    Splash: Splash
},RootConfig);

export default createAppContainer(AppNavigator);
