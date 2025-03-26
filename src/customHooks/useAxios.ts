import { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import axios from "axios";
const baseURL: string | undefined = process.env.REACT_APP_BASE_URL_DEV;

function useAxios() {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loadingPercentage, setLoadingPercentage] = useState(0)
    const controller = new AbortController();

    const callAPIWithToken = async(dataURL:string, method: string, postBody:any, params:any, token: string) => {
        try {
            const req = await axios({
                method: method,
                url: `${dataURL}`,
                data: postBody || null,
                params: params,
                headers: { Authorization: `Bearer ${token}` },
                signal: controller.signal,
                onDownloadProgress: (progressEvent) => {
                    let { loaded, total } = progressEvent;
                    let percentCompleted = total ? Math.floor((loaded * 100) / total) : null;
                    setLoadingPercentage(percentCompleted ? percentCompleted : 0);
                }
            });
            if (req) {
                return req.data;
            }
        } catch (error) {
            console.log(error)
        }
    }

    const callAPI = async (dataURL:string, method: string, postBody: any, params: any) => {
        try {
            const request = {
                scopes: ["User.Read","User.Read.All","Group.Read.All"],
                account: accounts[0]
            };
            console.log("Requesting Access token ...")
            // Silently acquires an access token which is then attached to a request for Microsoft Graph data
            let token = await instance.acquireTokenSilent(request);
            return callAPIWithToken(dataURL, method, postBody, params,token?.accessToken)
        } catch (error) {
            const request = {
                scopes: ["User.Read"],
                account: accounts[0]
            };
            let token = await instance.acquireTokenPopup(request);
            const accessToken = await axios({
                method: 'POST',
                url: `${baseURL}/api/v1/login`,
                headers: { Authorization: `Bearer ${token.accessToken}` },
            });
            setAccessToken(accessToken?.data?.access_token)
            return callAPIWithToken(dataURL, method, postBody, params,accessToken?.data?.access_token)
        }        
    }

    return [callAPI]
}

export default useAxios;



