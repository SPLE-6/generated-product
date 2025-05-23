import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const confirm = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();

	console.log("HALO")
	console.log(body)
	
	return axios.put(`${environment.rootApi}/call/profilpengguna/update`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default confirm
