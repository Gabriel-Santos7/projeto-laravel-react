import HttpService from './HttpService';


export const RegisterUserService = (credentials) => {
    const http = new HttpService();
    let signupUrl = "users/register";
    return http.postData(credentials, signupUrl).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;;
    })
}

export const RegisterUserAddressService = (credentials) => {
    const http = new HttpService();
    let signupUrl = "users/address";
    const tokenId = "user-token";
    return http.postData(credentials, signupUrl, tokenId).then((data) => {
        console.log(data);
        alert('Endereço Cadastrado com Sucesso');
        return data;
    }).catch((error) => {
        return error;;
    })
}

export const RegisterUserImageService = (credentials) => {
    const http = new HttpService();
    let signupUrl = "users/image";
    const tokenId = "user-token";
    return http.postData(credentials, signupUrl, tokenId).then((data) => {
        console.log(tokenId);
        console.log(data);
        return data;
    }).catch((error) => {
        return error;;
    })
}


export const LoginUserService = (credentials) => {

    const http = new HttpService();
    let loginUrl = "users/login";
    return http.postData(credentials, loginUrl).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;;
    })
}


export const LogOutUserService = () => {
    const http = new HttpService();
    let loginUrl = "users/logout";
    const tokenId = "user-token";
    return http.getData(loginUrl, tokenId).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;;
    })
}

