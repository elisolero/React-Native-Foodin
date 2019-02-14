import React, {Component} from 'react'
import { Container, Header, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import {StyleSheet,Dimensions,View,Image} from 'react-native'
import Login from '../components/login.component';
import {inject} from 'mobx-react';


@inject('stores')
export default class LoginScreen extends Component{

    constructor(props){
        super(props);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
      }
      


    render (){
        const {stores} = this.props;
        console.log('config', stores.config);

    return (
    <Container>
        {/* <Content scrollEnabled={false}> */}
            <View style={{flex:1}}>
            <Image style={styles.loginBackground} source={stores.config.LoginBG}/>

                <View style={styles.loginForeground}>
                    <Login {...this.props}/>
                </View>

            </View>
        {/* </Content> */}
      </Container>
    )
    }
}


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor:'green'
    },
    
    loginBackground: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor:'red'
    },
    loginForeground: {
    //   marginTop: Dimensions.get('window').height/1.75,
        position: 'absolute',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }
  })