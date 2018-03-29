import axios from 'axios';

axios.default.baseURL = 'http://localhost:5050';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.default.headers.Connection = 'keep-alive';
//axios.default.headers['User-Agent'] = ;

axios.default.timeout = 1000;
// axios.default.withCredentials: false,

axios.interceptors.response.use(function (response) {
	return {
		status: response.status,
		statusText: response.statusText,
		data: response.data
	};
});

export default fetch = async function (url) {
	return await axios({
		url: `http://localhost:5050${url}`,
		method: 'post',
		data: {
			name: 'maxushuang'
		}
	});
}

