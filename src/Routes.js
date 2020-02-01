import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Load from './pages/Load';
import Login from './pages/Login';
import Home from './pages/Home';
import Registrar from './pages/Registrar';

const MainNav = createStackNavigator ({
    Load: {
        screen: Load,
        navigationOptions: {
            headerShown: false
        }
    },
    Login:{
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home:{
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    Registrar:{
        screen: Registrar,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(MainNav);