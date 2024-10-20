import styled from "@emotion/styled";
import { colors } from "../../config/colors";
import { theme } from "../../config/mui-config";

export const Input = styled.input`
    border-radius: 16px;
    width: 349px;
    padding: 28px 23px 31px 23px;
    border: none;
    background-color: ${colors.white};
    outline-color: ${theme.palette.primary.main};
    &::placeholder {
        font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: ${colors.placeholder};
    }
`