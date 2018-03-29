import { observable, computed, autorun, action } from 'mobx';
import { readonly } from 'core-decorators';
import { getDeviceInfo, isTab } from '../utils';
import MainFactory from './MainFactory';
import MessageFactory from './MessageFactory';
import UserFactory from './MeFactory';
import EventCore, { ME_USERINFO, ROUTE_CHANGE } from '../utils/EventCore';
import fetch from '../action/fetch';
import feedlist from './feedlist';

class Store {
	@observable initTab = undefined;
	@observable uiState = {
					routeName: '',
					pageType: '',
					visitedTabs: [],
					tabChange: false
				};
	@observable userInfo = {
					userId: '10086',
					name: 'maxushuang',
					age: 25,
					vocation: 'IT',
					company: 'baidu',
					job: 'programmer'
				};

	@readonly deviceInfo = {};

	constructor() {
		console.log('global store init');
		this.deviceInfo = getDeviceInfo();

		this.Tab1List = new feedlist('Tab1');
		// this.MessageList = new MessageList('Message');

		EventCore.on(ME_USERINFO, this.getUserInfo);
		EventCore.on(ROUTE_CHANGE, this.getActiveTab);

		autorun(() => {
			this.initTabStore();
		});
	}

	@action.bound
	getUserInfo(userInfo) {
		this.userInfo = userInfo;
	}

	@action.bound
	getActiveTab(routeName) {
		this.uiState.routeName = routeName;
		if (isTab(routeName)) {
			this.uiState.pageType = 'Tab';
			if (this.uiState.visitedTabs.indexOf(routeName) === -1) {
				this.initTab = true;
				this.uiState.visitedTabs.push(routeName);
			}
		} else {
			this.uiState.pageType = 'Detail';
		}
	}
	dispatch() {
		
	}
	@action
	initTabStore() {
		if (this.initTab === undefined) {
			return ;
		}
		this.tabStore.focus();
		if (this.initTab === false) {
			return ;
		}
		this.tabStore.init();
		this.initTab = false;
	}

	@computed
	get tabStore() {
		if (this.uiState.pageType === 'Tab') {
			return this[`${this.uiState.routeName}List`];
		}
	}

	@action
	loadData() {
		switch (this.uiState.routeName) {
			case 'Tab1':
				this.tabStore.loadData();
			default:
				break;
		}
	}

	@action
	loadDetail() {

	}

}

export default new Store();
