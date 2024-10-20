import React from "react";
import { FooterIcon1 } from "../../../../assets/icons/footer-icon1";
import { FooterIcon2 } from "../../../../assets/icons/footer-icon2";
import { FooterIcon3 } from "../../../../assets/icons/footer-icon3";
import { FooterIcon4 } from "../../../../assets/icons/footer-icon4";
import { IconButton, Stack, styled } from "@mui/material";
import { theme } from "../../../../config/mui-config";

const CustomIconButton = styled(IconButton)`
    color: ${theme.palette.primary.main};
    transition: all 0.4 s ease;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${theme.palette.secondary[50]};
    &:hover {
        color: ${theme.palette.secondary[600]};
        background-color: ${theme.palette.secondary[100]};
    }
`

export const Buttons = () => {
    return (
        <Stack direction={"row"} gap={"15px"} justifyContent={"center"}>
            <CustomIconButton>
                <FooterIcon1 />
            </CustomIconButton>
            <CustomIconButton>
                <FooterIcon2 />
            </CustomIconButton>
            <CustomIconButton>
                <FooterIcon3 />
            </CustomIconButton>
            <CustomIconButton>
                <FooterIcon4 />
            </CustomIconButton>
        </Stack>

    )
}