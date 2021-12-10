import { combineReducers } from 'redux';
import clocksReducer from './clocks';
import wallpaperReducer from './wallpaper';
import authReducer from './auth';

export default combineReducers({
    clocksReducer,
    wallpaperReducer,
    authReducer
});
