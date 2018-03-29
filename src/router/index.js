import react, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MainStack from './MainStack';
import MessageStack from './MessageStack';
import MeStack from './MeStack';

import Store from '../store';

import Main from '../pages/Main';
import Message from '../pages/Message';
import Me from '../pages/Me';
import EventCore, { ROUTE_CHANGE } from '../utils/EventCore';

const mainTab = TabNavigator({
	'Main': {
		screen: Main.MainTab
	},
	'Message': {
		screen: Message.MessageList
	},
	'Me': {
		screen: Me.list
	}
}, {
	initialRouteName: 'Main',
	order: ['Main', 'Message', 'Me'],
	tabBarPosition: 'bottom',
	removeClippedSubviews: false
});

const main = StackNavigator({
	Root: {
		screen: mainTab
	},
	MainDetail: {
		screen: Main.MainDetail
	},
	MessageDetail: {
		screen: Message.MessageDetail
	}
}, {
	initialRouteName: 'Root',
	mode: 'card'
});

const defaultGetStateForAction = main.router.getStateForAction;

main.router.getStateForAction = function (action, state) {
	const nextState = defaultGetStateForAction(action, state);
	console.log('action');
	console.log(action);
	console.log(nextState);

	const nextRouteName = parseRoute(nextState);
	EventCore.emit(ROUTE_CHANGE, nextRouteName);
	return nextState;
	
}

function parseRoute(routeState) {
	let route = routeState;
	let routeName = '';
	while(route.routes) {
		route = route.routes[routeState.index];
		routeName = route.routeName;
	}
	return routeName;
}

export default main;
