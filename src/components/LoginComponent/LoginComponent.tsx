import React from 'react'
import { LoginButton, LoginContainer, Text, Container } from './LoginComponent.styles'
import { useMsal } from '@azure/msal-react';
import { signInClickHandler } from '../../services/AuthService';

const LoginComponent:React.FC = () => {
    const { instance } = useMsal();
        
    const handleLoginClick = async () => {
        try {
            let login = await signInClickHandler(instance)
        } catch (error) {
            console.log("error ", error)
        }
    }

    return (
        <Container>
            <LoginContainer>
                <Text>Welcome to React MARS Template</Text>
                <LoginButton onClick={handleLoginClick}>Login with Microsoft</LoginButton>
            </LoginContainer>
        </Container>
    )
}

export default LoginComponent