import { TextInputProps } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, TextInput } from "./styles";
import { useTheme } from "styled-components";

type Props = TextInputProps & {
    bgColor?: string,
    icon: string;
};

export function Input({ bgColor = '#ffffff', icon, ...rest }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container bgColor={bgColor}>
            <FontAwesome5 name={icon} size={16} color={COLORS.light_gray} />

            <TextInput
                {...rest}
            />
        </Container>
    );
}