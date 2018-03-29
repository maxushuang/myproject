import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { bind } from 'lodash-decorators';
import { withNavigation } from 'react-navigation';

class abc extends Component {
	constructor(props) {
		super(props);
		this.props.navigation = {};
	}
	render() {
		return (
			<View>
				<View onPress = {this._main}>
					<Text>123</Text>
				</View>
				<View onPress = {this._message}>
					<Text>456</Text>
				</View>
				<View >
					<Text onPress = {this._me}>789</Text>
				</View>
			</View>
		);
	}
	@bind
	_main() {
		this.props.navigation.navigate('Main');
	}
	@bind
	_message() {
		this.props.navigation.navigate('Message');
	}
	@bind
	_me() {
		console.log('me');
		this.props.navigation.navigate('Me');
	}
};
export default withNavigation(abc);
