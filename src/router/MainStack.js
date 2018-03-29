import React, { Component }from 'react';
import { StackNavigator } from 'react-navigation';
import Main from '../pages/Main';

export default StackNavigator({
	'MainTab': {
		screen: Main.MainTab
	},
	'MainDetail': {
		screen: Main.MainDetail
	}
}, {
	initialRouteName: 'MainTab'
});
