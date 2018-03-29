import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { bind } from 'lodash-decorators';
import { observer, inject } from 'mobx-react';

function createTabFactory (tab) {
	@inject('store')
	@observer
	class MessageList extends Component {
		constructor(props) {
			super(props);

			this.state = {
				tabName: tab
			};
			
		}

		@bind()
		_renderItem({ item, index }) {
			return (
				<View key={index}>
					<Text onPress = {this.pressHandler}>{item.title}</Text>
				</View>
			);
		}

		@bind()
		pressHandler() {
			this.props.navigation.navigate('MainDetail');;
		}

		componentWillMount() {
			//this.props.store.activeStore.loadFeed();
		}
		@bind()
		_ListEmptyComponent() {
			return (
				<View>
					<Text>Null</Text>
				</View>
			);
		}
		render() {
			//this.props.store.activeStore.feedList
			return (
				<View>
					<FlatList
						data = {[{title: 1}]}
						renderItem = {this._renderItem}
						ListEmptyComponent = {this._ListEmptyComponent}
					></FlatList>	
				</View>
			);
		}
		componentDidMount() {

		}
	}
	return MessageList;
}
export default createTabFactory;
