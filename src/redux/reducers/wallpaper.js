import { wallpaperConstants } from '../actions/wallpaper';

const initialState = {
    wallpaper: 'starry mountain.png'
}

const wallpaperReducer = (state = initialState, action) => {
    switch (action.type) {
        case wallpaperConstants.SET_WALLPAPER:
            return { wallpaper: action.payload };

        default:
            return state;
    }
};
export default wallpaperReducer;
