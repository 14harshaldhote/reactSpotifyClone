export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type){
        case 'SET_USER': //action-> type , playload
            return{
                ...state,
                user: action.user
            }
            default :
            return state;
    }
}

export default reducer;