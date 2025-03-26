export function signInClickHandler(instance: any): void {
    instance.loginRedirect({
        scopes: ['User.Read', 'Group.Read.All'],
    });
}

export function signOutClickHandler(instance: any) {
    const logoutRequest = {
        account: instance.getAccountByHomeId(process.env.REACT_APP_CLIENT_ID),
        postLogoutRedirectUri: "localhost:3000",
    };
    instance.logoutRedirect(logoutRequest);
}

// Add new functions to handle login and logout actions
export const login = (instance: any) => {
    return (dispatch: any) => {
        signInClickHandler(instance);
        dispatch({ type: 'LOGIN_REQUEST' });
    };
};

export const logout = (instance: any) => {
    return (dispatch: any) => {
        signOutClickHandler(instance);
        dispatch({ type: 'LOGOUT_REQUEST' });
    };
};