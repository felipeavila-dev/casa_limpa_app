import styled from "styled-components/native";

type ButtonProps = {
    bgColor: string
};

type TextProps = {
    textColor: string
};

export const Container = styled.TouchableOpacity<ButtonProps>`
    justify-content: center;
    align-items: center;

    width: 100%;

    height: 45px;

    background-color: ${({ bgColor }) => bgColor};

    border-radius: 8px;

    margin: 8px 0;
`;

export const ButtonText = styled.Text<TextProps>`
    color: ${({ textColor }) => textColor};

    font-size: ${({ theme }) => theme.FONT_SIZE.regular};
    font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`;
