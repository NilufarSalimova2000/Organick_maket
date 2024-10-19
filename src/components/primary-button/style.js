import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { colors } from "../../config/colors";
import { theme } from "../../config/mui-config";

export const StyledPrimaryButton = styled(Button)`
    border-radius: 16px;
    padding: 28px 68px 28px 39px;
    background: ${colors.primaryButton};
    font-weight: 700;
    font-size: 20px;
    display: flex;
    gap: 10px;
    color: ${theme.palette.primary.main};
    &:hover {
    color: ${theme.palette.primary[900]};
    }
`