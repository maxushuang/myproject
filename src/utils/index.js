import DeviceInfo from 'react-native-device-info';

export function getDeviceInfo() {
	console.log(DeviceInfo.getDeviceId());
	console.log(DeviceInfo.getBrand());
	console.log(DeviceInfo.getBundleId());
	console.log(DeviceInfo.getDeviceName());
	console.log(DeviceInfo.getUniqueID());
	console.log(DeviceInfo.getUserAgent());
	console.log(DeviceInfo.getVersion());
	console.log(DeviceInfo.getSystemName());
	console.log(DeviceInfo.getSystemVersion());
	return {
		system: DeviceInfo.getSystemName(),
		systemVersion: DeviceInfo.getSystemVersion(),
		bundleId: DeviceInfo.getBundleId(),
		uuid: DeviceInfo.getUniqueID(),
		ua: DeviceInfo.getUserAgent()
	};
}

export function isTab (routeName) {
	const tabRouteName = ['Tab1', 'Message', 'Me'];
	return (tabRouteName.indexOf(routeName) !== -1);
}
