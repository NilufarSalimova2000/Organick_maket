import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../config/mui-config";
import { colors } from "../../config/colors";

export const StyledFourthButton = styled(Button)`
    border-radius: 16px;
    padding: 28px 64px;
    background-color: ${theme.palette.primary.main};
    font-weight: 700;
    font-size: 20px;
    display: flex;
    gap: 10px;
    color: ${colors.white};
    &:hover {
        background-color: ${theme.palette.primary[700]};
    }
`