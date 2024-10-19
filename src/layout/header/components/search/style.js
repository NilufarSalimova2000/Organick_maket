import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { theme } from "../../../../config/mui-config";
import { colors } from "../../../../config/colors";

export const CustomIconButton = styled(IconButton)`
    border-radius: 50%;
    background-color: ${theme.palette.secondary.main};
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${theme.palette.secondary[600]}; 
    }
`

export const CartWrapper = styled.div`
    border: 1px solid ${colors.cartBorder};
    border-radius: 33px;
    width: 220px;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 12px;
`
export const CartIconButton = styled(IconButton)`
    border-radius: 50%;
    background-color: ${theme.palette.primary.main};
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${theme.palette.primary[600]}; 
    }
`