import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
    text: string,
    textColor?: string,
    bgColor?: string
}
export function Button({ text, bgColor = '#76364D', textColor = '#ffffff', ...rest }: Props) {
    return (
        <Container bgColor={bgColor} {...rest}>
            <ButtonText textColor={textColor}>
                {text}
            </ButtonText>
        </Container>
    );
}