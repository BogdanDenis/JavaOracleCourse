export class TokenService {
	static saveToken(token) {
		localStorage.setItem('token', JSON.stringify(token));
	}

	static getToken() {
		return localStorage.getItem('token');
	}

	static removeToken() {
		localStorage.removeItem('token');
	}
}