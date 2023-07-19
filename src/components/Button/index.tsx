import { Container, ButtonText } from "./styles";

type Props = {
    text: string,
    textColor?: string,
    bgColor?: string
}
export function Button({ text, bgColor = '#76364D', textColor = '#ffffff' }: Props) {
    return (
        <Container bgColor={bgColor}>
            <ButtonText textColor={textColor}>
                {text}
            </ButtonText>
        </Container>
    );
}