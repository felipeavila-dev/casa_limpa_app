import styled from "styled-components/native";

type Props = {
    bgColor: string,
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;

    width: 100%;

    height: 45px;
    background-color: ${({ bgColor }) => bgColor};

    border-radius: 8px;
    padding: 0 12px;
    margin: 8px 0;
`;

export const TextInput = styled.TextInput`
    flex: 1;

    font-size: ${({ theme }) => theme.FONT_SIZE.regular};
    font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
    
    color: ${({ theme }) => theme.COLORS.gray};

    margin-left: 20px;
`;