// export const initialState = {
//     user: null,
//     playlists: [],
//     playing: false,
//     item: null,
// };

// const reducer = (state, action) => {
//     console.log(action);

//     switch (action.type){
//         case 'SET_USER': //action-> type , playload
//             return{
//                 ...state,
//                 user: action.user,
//             };
//             default :
//             return state;
//     }
// };

// export default reducer;

// reducer.js
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDsBbKZxOOvJDyedYZS813VSghfJu4d34plf5lBzqq9oLr-5XXzG-05AJIf2h7cwHifAoLiibE_LV9-STWopVP34EPqHwIC78Dy9F4maXVzTEywGNhlo8JXOzTUlhdmOvQP6Nb6XL5-gylUQM-pbD056Eopu_1ozQuXvMy_Robg0md3cUoCDvJj83f_tkCx4HkbopdAOHgn5u0XLPfX',
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,};
      default:
        return state;
    }
  };
  
  export default reducer;
  