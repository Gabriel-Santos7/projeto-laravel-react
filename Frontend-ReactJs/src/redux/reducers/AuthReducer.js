import * as ActionTypes from '../ActionTypes';

const initState = {
    authResponse: "",
  };
  
  const AuthReducer = (state = initState, action) => {
    switch (action.type) {
      case ActionTypes.RESTART_AUTH_RESPONSE:
        return {
          ...state,
          authResponse: "",
        };
      case ActionTypes.LOADING:
        return {
          ...state,
          authResponse: "carregando...",
        };
  
      case ActionTypes.SIGNUP_SUCCESS:
        return {
          ...state,
          authResponse: action.res,
        };
  
      case ActionTypes.SIGNUP_ERROR:
        return {
          ...state,
          authResponse: action.res,
        };
  
        case ActionTypes.LOGIN_SUCCESS:
          return {
            ...state,
            authResponse: "redirecionando ao dashboard...",
          };
    
        case ActionTypes.LOGIN_ERROR:
          return {
            ...state,
            authResponse: action.res,
          };  
  
  
          case ActionTypes.LOGOUT_SUCCESS:
            return {
              ...state,
              authResponse: action.res,
            };
      
          case ActionTypes.LOGOUT_ERROR:
            return {
              ...state,
              authResponse: action.res,
            };    
  
      case ActionTypes.CODE_ERROR:
        return {
          ...state,
          authResponse:
            "Erro inesperado, atualize o navegador",
        };
  
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  
