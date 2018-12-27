/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator,
} from 'react-navigation'

import PopPage from './PopPage'
import SearchPage from "./SearchPage";
import FavoritePage from "./FavoritePage";
import MyPage from "./MyPage";


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import NavigationUtil from "../navigator/NavigationUtil";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomePage extends Component<Props> {

    _tabNavigator() {
        return createBottomTabNavigator({
            PopPage:{
                screen:PopPage,
                navigationOptions:{
                    tabBarLabel:'首页',
                    tabBarIcon:({
                        tintColor,focused
                    }) => (
                        <MaterialIcons name={'home'} size={26} style={{color:tintColor}}/>
                    )
                }
            },
            SearchPage:{
                screen:SearchPage,
                navigationOptions:{
                    tabBarLabel:'查询',
                    tabBarIcon:({
                        tintColor,focused
                    }) => (
                        <MaterialIcons name={'search'} size={26} style={{color:tintColor}}/>
                    )
                }
            },
            // FavoritePage:{
            //     screen:FavoritePage,
            //     navigationOptions:{
            //         tabBarLabel:'关注',
            //         tabBarIcon:({
            //             tintColor,focused
            //         }) => (
            //             <MaterialIcons name={'center-focus-strong'} size={26} style={{color:tintColor}}/>
            //         )
            //     }
            // },
            MyPage:{
                screen:MyPage,
                navigationOptions:{
                    tabBarLabel:'我的',
                    tabBarIcon:({
                        tintColor,focused
                    }) => (
                        <Entypo name={'user'} size={26} style={{color:tintColor}}/>
                    )
                }
            },

        })
    }

    render() {
        NavigationUtil.navigation = this.props.navigation
        const Tab=this._tabNavigator()
        return <Tab/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
