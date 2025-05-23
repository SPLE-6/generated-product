import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const confirm = (data = {}, params = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	const paramsGet = Object.assign(params, {token});
	return axios.post(`${environment.rootApi}/call/pemesanan/save-user`, body,
	{
		params: paramsGet,
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default confirm
