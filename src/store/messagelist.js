import { observable, computed, autorun, action } from 'mobx';
import EventCore, { MESSAGE_UNREAD } from '../utils/EventCore';
class MessageList {
	constructor(scopeTab, channel) {
		this.channel = channel;
		this.scopeTab = scopeTab;
		this.storageId = `${scopeTab}${channel}`;
		this.cached = [];
		this.unReadNum = 0;
		this.init();
	}

	init() {
		this.getCachedMessage();
		this.loadMessage();
		EventCore.emit('MESSAGE_UNREAD', this.unReadNum);
	}

	loadMessage() {

	}
	getCachedMessage() {

	}
}

export default MessageList;

