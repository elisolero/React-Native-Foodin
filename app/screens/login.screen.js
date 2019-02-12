import react, {Component} from 'react'
import {Container,Content} from 'native-base'
import {View,Image} from 'react-native'
import Login from '../components/login.component';
import {inject} from 'mobx-react';


@inject('stores')
export default class LoginScreen extends Component{
    constructor(props){
        super(props);
    }

    render (){
        const stores = this.props;

        return (
            <Container>
                <View>
                    <Content scrollEnabled={false}>
                        <Image source={stores.config.loginBG}>
                            <View>
                                <Login {...this.props} />
                            </View>
                        </Image>
                    </Content>
                </View>
            </Container>
        );
    }
}