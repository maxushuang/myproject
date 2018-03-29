import { observable, computed, autorun, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import { userInfo } from '../data';
import EventCore, { Me_UpdateInfo } from '../utils/EventCore';

export default class UserInfo {
	@observable uiState = {
					isLogin: true
				};
	constructor(scopeTab, channel) {
		this.storageId = `${scopeTab}${channel}`;
		this.scopeTab = 'Me';
		this.channel = 'Main';
		this.cached = {};
		this.init();
	}

	init() {
		this.cached = this.getCachedUserInfo();
		this.loadUserInfo();
	}

	async getCachedUserInfo() {
		try {
			return JSON.parse(await AsyncStorage.getItem(this.storageId) || { tag: '0.0.0', data: {} });
		} catch (e) {
			console.log(e);
			return {};
		}
	}

	loadUserInfo() {
		/*const response = userInfo;

		if (response.tag === this.cached.tag) {
			return true;
		}

		this.cached.data = response.data;
		EventCore.emit(Me_UpdateInfo, response.data);*/

	}

	async _clearInfo() {
		try {
			await AsyncStorage.removeItem(this.storageId);
		} catch (e) {
			console.log(e);
		}
	}
}
