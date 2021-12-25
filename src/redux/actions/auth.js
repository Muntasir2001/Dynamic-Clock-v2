// import * as api from '../../api';

export const authConstants = {
	AUTH: 'AUTH',
	LOGOUT: 'LOGOUT',
};

//* Action Creators
export const logout = () => ({
	type: authConstants.LOGOUT,
});

export const signUp = (formData, navigate) => async (dispatch) => {
	try {
		// const { data } = await api.signUp(formData);

		dispatch({ type: authConstants.AUTH, formData });

		navigate('/');
	} catch (error) {
		console.log(error);
	}
};

export const signIn = (formData, navigate) => async (dispatch) => {
	try {
		// const { data } = await api.signIn(formData);

		dispatch({ type: authConstants.AUTH, formData });

		navigate('/');
	} catch (error) {
		console.log(error);
	}
};
