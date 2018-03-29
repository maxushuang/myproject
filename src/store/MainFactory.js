import { observable, autorun, computed } from 'mobx';
import feedList from './feedlist';
import { readonly } from 'core-decorators';

class MainFactory {
	@readonly tabName = 'Main';
	@observable isActive = false;
	@observable uiState = {
					activeTab: 'tab1',
					hasUpdateTab: []
				};

	constructor() {
		this.tab1 = new feedList('Main', 'tab1');
		this.tab2 = new feedList('Main', 'tab2');
		this.tab3 = new feedList('Main', 'tab3');
	}

	init(tab = 'tab1') {
		this[tab].init();
		this.uiState.activeTab = tab;
	}

	@computed
	get activeStore() {
		return this[this.uiState.activeTab];
	}
}


export default MainFactory;
