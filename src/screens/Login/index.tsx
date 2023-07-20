import { useEffect } from 'react';
import { ANDROID_CLIENT_ID } from '@env';
import { useTheme } from 'styled-components';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import BackgroundPNG from '../../assets/images/bg.png';
import LogoPng from '../../assets/images/logo.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Text, TextButton } from "./styles";

WebBrowser.maybeCompleteAuthSession();

export function Login() {
    const { COLORS } = useTheme();


    const [_request, response, googleSignIn] = Google.useAuthRequest({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email']
    });

    function handleGoogleSign() {
        googleSignIn()
            .then((response) => {
                console.log('Resposta do login -> ', response);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log('Response -->', response);
    }, [response]);

    return (
        <Container source={BackgroundPNG}>
            <Logo
                source={LogoPng}
            />

            <Input
                placeholder='E-mail'
                placeholderTextColor={COLORS.light_gray}
                bgColor={COLORS.white}
                icon='user'
            />

            <Input
                placeholder='Senha'
                placeholderTextColor={COLORS.light_gray}
                bgColor={COLORS.white}
                icon='lock'
                secureTextEntry
            />

            <Button text='Entrar' />

            <Button
                text='Entrar com Google'
                bgColor='#ffffff'
                textColor={COLORS.gray}
                onPress={handleGoogleSign}
            />

            <TextButton>
                <Text>Cadastre-se</Text>
            </TextButton>

            <TextButton>
                <Text>Esqueceu sua senha?</Text>
            </TextButton>
        </Container>
    );
}