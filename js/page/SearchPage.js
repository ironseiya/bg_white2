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
    createMaterialTopTabNavigator,
} from 'react-navigation'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SearchPage extends Component<Props> {
    render() {

        const TabNavigator = createMaterialTopTabNavigator({
            SalaryTab1:{
                screen:SalaryTab,
                navigationOptions:{
                    title:'工资查询'
                }
            },
            SalaryTab2:{
                screen:SalaryTab,
                navigationOptions:{
                    title:'公积金查询'
                }
            },
        })
        return <View style={{flex: 1,marginTop: 30}}>
            <TabNavigator/>
        </View>;
    }
}

class SalaryTab extends Component<Props> {
    render() {

        const {tabLabel} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
            </View>
        );
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
