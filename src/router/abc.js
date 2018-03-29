import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { bind } from 'lodash-decorators';
import { withNavigation } from 'react-navigation';

class abc extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return (
			<View>
				<View>
					<Text onPress = {this._main}>123</Text>
				</View>
				<View>
					<Text onPress = {this._message}>456</Text>
				</View>
				<View>
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
		this.props.navigation.navigate('Me');
	}
};
export default abc;
