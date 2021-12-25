import * as api from '../../api';

export const clockConstants = {
	FETCH_ALL: 'FETCH_ALL',
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	START_LOADING: 'START_LOADING',
	END_LOADING: 'END_LOADING',
};

// Action Creators
//* The async (dispatch) is the syntax of Redux Thunk
export const getClocks = () => async (dispatch) => {
	try {
		dispatch({ type: clockConstants.START_LOADING });

		const { data } = await api.fetchClocks();
		// dispatches to the state
		dispatch({ type: clockConstants.FETCH_ALL, payload: data });
		dispatch({ type: clockConstants.END_LOADING });
	} catch (error) {
		console.log(error);
	}
};
export const addClock = (newClockData) => async (dispatch) => {
	try {
		dispatch({ type: clockConstants.START_LOADING });

		const { data } = await api.addClock(newClockData);

		dispatch({ type: clockConstants.CREATE, payload: data });
		dispatch({ type: clockConstants.END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const updateClock = (clockId, newClockData) => async (dispatch) => {
	try {
		const { data } = await api.updateClock(clockId, newClockData);

		dispatch({ type: clockConstants.UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteClock = (clockId) => async (dispatch) => {
	try {
		dispatch({ type: clockConstants.START_LOADING });

		await api.deleteClock(clockId);

		dispatch({ type: clockConstants.DELETE, payload: clockId });
		dispatch({ type: clockConstants.END_LOADING });
	} catch (error) {
		console.log(error);
	}
};
