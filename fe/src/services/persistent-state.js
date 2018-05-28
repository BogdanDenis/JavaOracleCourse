export class PersistentState {
	static getState() {
		const stateStorage = localStorage.getItem('state');
		if (!stateStorage) {
			return {};
		}
		return JSON.parse(stateStorage);
	}

	static saveState(state) {
		localStorage.setItem('state', JSON.stringify(state));
	}

	static init(store) {
		window.addEventListener('beforeunload', () => {
			PersistentState.saveState(store.getState());
		});
	}
}