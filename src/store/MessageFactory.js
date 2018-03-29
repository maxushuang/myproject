import { observable, computed, autorun, action } from 'mobx';
import MessageList from './messagelist';

class MessageFactory {
	@observable uiState = {

				};
	constructor() {
		this.tabName = 'Message';
		this.messageList = new MessageList(this.tabName, 'Main');

	}
	init() {
	}
}

export default MessageFactory;
