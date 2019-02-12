import React,{Component} from 'react';
import { Image, View } from 'react-native';
import {inject} from'mobx-react';

@inject('stores')
export default class SplashScreen extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
        const {stores,navigation} = this.props;
        // setTimeout(() => {
        //     navigation.navigate('login')
        // },stores.config.SplashTime)
    }

    render(){
        const {stores} = this.props;
        return (
            <View style={{flex:1}}>
                <Image style={{flex:1,width:null, height:null}} source={stores.config.SplashImg}/>
            </View>
        );
    }
}