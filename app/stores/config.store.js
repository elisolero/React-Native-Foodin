export default class ConfigStore{
    constructor(){
        this.splashTime = 3000;
        this.splashImg = require('../../images/splash.jpg')
        this.loginBG = require('../../images/login.jpg')
    }

    get SplashImg(){
        return this.splashImg;
    }

    get LoginBG(){
        return this.loginBG;
    }

    get SplashTime(){
        return this.splashTime;
    }
}