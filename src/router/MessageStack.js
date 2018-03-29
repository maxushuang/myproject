import React, { Component }from 'react';
import { StackNavigator } from 'react-navigation';
import Message from '../pages/Message';

export default StackNavigator({
	'MessageList': {
		screen: Message.MessageList
	},
	'MessageDetail': {
		screen: Message.MessageDetail
	}
});
