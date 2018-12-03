import {response as res} from '../index';
import VKWebAppEvent from '../VKWebAppEvent';

export default(eventName, hasError = false) => {
	return {
		postMessage: (params) => {
			if (!res[eventName].data) {
				throw Error(eventName + " data not mocked")
			}
			if (!res[eventName].errorData) {
				throw Error(eventName + " errorData not mocked")
			}
			VKWebAppEvent(
				!hasError
				? res[eventName].data
				: res[eventName].errorData);
		}
	};
};
