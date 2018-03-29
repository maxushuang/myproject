import React, { Component }from 'react';
import { StackNavigator } from 'react-navigation';
import Me from '../pages/Me';

export default StackNavigator({
	'MeMain': {
		screen: Me.list
	}
});
