import { authConstants } from '../actions/auth';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case authConstants.AUTH:
            //action is {data: { result, token }}
            localStorage.setItem(
                'dynamicClockUser',
                JSON.stringify({ ...action?.data })
            );
            return { ...state, authData: action?.data };
            
        case authConstants.LOGOUT: {
            localStorage.removeItem('dynamicClockUser');
            return { ...state, authData: null };
        }
        default:
            return state;
    }
};
export default authReducer;
