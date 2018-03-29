import { observable, computed, autorun, runInAction, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import { tabData } from '../data';
import fetch from '../action/fetch';

export default class feedList {
	@observable isActive = false;
	@observable uiState = {
					version: '0.0.0',
					tag: '0.0.0',
					lastUpdateTime: 0,
					headListTag: '0.0.0',
					normalListTag: '0.0.0'
				};

    @observable headList = [];
    @observable normalList = [];

	constructor(tabName) {
		this.tabName = tabName;
		this.storageId = `${tabName}`;
		this.cached = [];
	}
	
	init() {
		this.cached = this.getCached();
	}

	@action
	focus() {
		this.isActive = true;
	}

	@computed
	get feedList() {
		return [...this.headList, ...this.normalList];
	}

	@computed
	get data() {
		return this.feedList.slice();
	}

	@computed
	get size() {
		return this.feedList.length;
	}

	@action
	loadData(isClearBefore = false) {
		if (isClearBefore) {
			this.clearCached();
		}
		let time = (new Date()).valueOf();
		if (time - this.uiState.lastUpdateTime < 500) {
			return ;
		}
		fetch('/main/tab1').then(response => {
			runInAction(() => {
				this.lastUpdateTime = (new Date()).valueOf();
				if (this.uiState.tag === response.data.tag) {
					return;
				}
				if (this.uiState.normalListTag !== response.data.normalList.tag) {
					this.uiState.normalListTag = response.data.normalList.tag;
					this.normalList = response.data.normalList.data;
				}

				if (this.uiState.headListTag !== response.data.headList.tag) {
					this.uiState.headListTag = response.data.headList.tag;
					this.headList = response.data.headList.data;
				}
				this.tag = response.data.tag;

			});
		});
	}

	async getCached() {
		let headList = [];
		let normalList = []; 
		try {
			headList = await AsyncStorage.getItem(`${this.storageId}$headList`) || [];
			normalList = await AsyncStorage.getItem(`${this.storageId}$normalList`) || [];
			return [...headList, ...normalList];
		} catch (e) {
			console.log(e);
		}
	}

	async clearCached() {
		try {
			await AsyncStorage.removeItem(`${this.storageId}$headList`);
			await AsyncStorage.removeItem(`${this.storageId}$normalList`);
		} catch (e) {
			console.log(e);
		}
	}
};
