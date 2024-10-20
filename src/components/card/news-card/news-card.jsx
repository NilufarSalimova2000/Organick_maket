import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Date, Info } from "./style";
import { UserIcon } from "../../../assets/icons/user-icon";
import { PrimaryButton } from "../../primary-button";

export const NewsCard = ({imag, date, who, title, text, button}) => {
    return (
        <Box position={"relative"}>
            <Box>
                <img src={imag} alt="" />
            </Box>
            <Date>{date}</Date>
            <Info>
                <Stack mb={"15px"} direction={"row"} alignItems={"center"} gap={"8px"}>
                    <UserIcon />
                    <Typography fontWeight={"400"} variant="h6">{who}</Typography>
                </Stack>
                <Typography mb={"2px"} fontSize={"25px"} variant="h3">{title}</Typography>
                <Typography mb={"15px"} variant="body1">{text}</Typography>
                <PrimaryButton>{button}</PrimaryButton>
            </Info>
        </Box>
    )
}