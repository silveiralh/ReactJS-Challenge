// const INITIAL_STATE = {
//     login: '',
//     isLogged: 0,
// };

// function userReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case 'LOGIN':
//             return { ...state, isLogged: 1, login: action.usuarioEmail }
//         case 'LOGOUT':
//             return { ...state, isLogged: 0, login: null }
//         case 'SEMACESSO':
//             return { ...state, isLogged: 0, login: null }
//         default:
//             return state;
//     }
// }
// export default userReducer;