export class TokenService {
	static saveToken(token) {
		localStorage.setItem('token', JSON.stringify(token));
	}

	static getToken() {
		const token = localStorage.getItem('token');
		if (!token) {
			return null;
		}
		return JSON.parse(token);
	}

	static removeToken() {
		localStorage.removeItem('token');
	}
}