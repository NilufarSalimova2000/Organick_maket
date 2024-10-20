import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../config/mui-config";
import { colors } from "../../config/colors";

export const StyledThirdyButton = styled(Button)`
    border-radius: 16px;
    border: 2px solid ${theme.palette.primary.main};
    padding: 28px 68px 28px 39px;
    background-color: ${colors.white};
    font-weight: 700;
    font-size: 20px;
    display: flex;
    gap: 10px;
    color: ${theme.palette.primary.main};
    &:hover {
        background-color: ${theme.palette.primary[100]};
    }
`