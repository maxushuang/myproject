import { TabNavigator } from 'react-navigation';
import TabFactory from './TabFactory';

const Tab = TabNavigator({
	Tab1: {
		screen: TabFactory('tab1')
	}/*,
	Tab2: {
		screen: TabFactory('tab2')
	},
	Tab3: {
		screen: TabFactory('tab3')
	}*/
}, {
	swipeEnabled: true,
	animationEnabled: true,
	tabBarPosition: 'top',
	tabBarOptions: {
		initialRouteName: 'Tab1'/*,
		order: ['Tab1', 'Tab2', 'Tab3']*/
	},
	lazy: true,
	removeClippedSubviews: false
});

export default Tab;
