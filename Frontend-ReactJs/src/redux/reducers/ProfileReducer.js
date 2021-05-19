import * as ActionTypes from '../ActionTypes';
const initState = {
    userProfile: "",
  };
  
  const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
      
      case ActionTypes.LOADING:
        return {
          ...state,
          userProfile: "carregando...",
        };
  
      case ActionTypes.LOAD_PROFILE_SUCCESS:
        return {
          ...state,
          userProfile: action.res,
        };
  
      case ActionTypes.LOAD_PROFILE_ERROR:
        return {
          ...state,
          userProfile: action.res,
        };
    
      case ActionTypes.CODE_ERROR:
        return {
          ...state,
          userProfile:
            "Erro inesperado, atualize o navegador",
        };
  
      default:
        return state;
    }
  };
  
  export default ProfileReducer;
  