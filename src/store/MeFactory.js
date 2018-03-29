import { observable, computed, autorun } from 'mobx';
import { readonly } from 'core-decorators';
import UserInfo from './userinfo';

class MeFactory {
	@readonly tabName = 'Me';
	@observable uiState = {
					isActive: false,
					page: 'Main'
				};
	constructor() {
		this.userinfo = new UserInfo('Me', 'Main');
	}

	init() {
	}

}
