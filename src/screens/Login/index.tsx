import { useTheme } from 'styled-components';

import BackgroundPNG from '../../assets/images/bg.png';
import LogoPng from '../../assets/images/logo.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Text, TextButton } from "./styles";

export function Login() {
    const { COLORS } = useTheme();
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