import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import statement
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { GlobalProvider } from "./context/Provider";
import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
// import { ThemeProvider } from '@mui/styles';
// import { theme } from './theme/theme';


const config: Configuration = {
    auth:{
        postLogoutRedirectUri: "/login", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
        clientId: process.env.REACT_APP_CLIENT_ID!, // DEV
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}/`,
        redirectUri: process.env.REACT_APP_REDIRECT_URI!, // app registertion     
    },
    cache:{
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
    system:{
        loggerOptions:{
            loggerCallback: (level, message, containsPii)=>{
                if(containsPii){
                    return;
                }
                return;
            }
        }
    }
};

const publicClientApplication = new PublicClientApplication(config);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
    <React.Fragment>
    <MsalProvider instance={publicClientApplication}>
  <Provider store={store}>
    <App />
  </Provider>
    </MsalProvider>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
