import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MessageList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('me');
		return (
			<View>
				<Text>45</Text>
			</View>
		);
	}
	componentDidMount() {
		console.log(321);
	}
}
