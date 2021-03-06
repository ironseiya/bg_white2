import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation'

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen:WelcomePage,
        navigationOptions: {
            header:null, //全屏显示
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen:HomePage,
        navigationOptions: {
            header:null, //全屏显示
        }
    },
    DetailPage: {
        screen:DetailPage,
        navigationOptions: {
            // header:null, //全屏显示
        }
    },
})


export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions: {
    header:null, //全屏显示
    }
})