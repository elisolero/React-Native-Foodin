import React from 'react';
import {Provider} from 'mobx-react'
import AppNavigator from './app/app.navigator'
import stores from './app/stores'
import {StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom'
import { Font } from 'expo';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider stores={stores}>
      <StyleProvider style={getTheme(custom)}>
        <AppNavigator/>
      </StyleProvider>
      </Provider>
    );
  }
}