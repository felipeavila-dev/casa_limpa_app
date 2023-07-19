import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 24px;
`;

export const Logo = styled.Image`
    margin-bottom: 56px;
`;

export const TextButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    margin: 8px 0;

    border-radius: 8px;

    width: 100%;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.dark_gray};

    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    font-family: ${({ theme }) => theme.FONT_FAMILY.regular};

    text-decoration: underline;
`;