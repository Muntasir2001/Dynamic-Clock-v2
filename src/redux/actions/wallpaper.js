export const wallpaperConstants = {
    SET_WALLPAPER: 'SET_WALLPAPER',
};

// Action Creators
//* The async (dispatch) is the syntax of Redux Thunk
export const setWallpaper = (image) => ({
    type: wallpaperConstants.SET_WALLPAPER,
    payload: image,
});
