import { observable, autorun, computed } from 'mobx';
import feedList from './feedlist';

class MainTabFactory {
	tabName = 'main';
	@observable isActive = false;
	@observable uiState = {
					activeTab: 'tab1',
					hasUpdateTab: []
				};

	constructor() {
		this.tab1 = new feedList('main', 'tab1');
		/*this.tab2 = new feedList('main', 'tab2');
		this.tab3 = new feedList('main', 'tab3');*/
/*		autorun(() => {
			this[this.uiState.activeTab].loadFeed();
		});*/
	}
	



}


export default MainTabFactory;
