import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../config/colors";

export const OrganicCard = ({bgImag, title}) => {
    return (
        <Stack py={"244px"} px={"146px"} sx={{backgroundImage: `url(${bgImag})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover"}}>
            <Box width={"325px"} borderRadius={"20px"} padding = {"33px 83px 34px 83px"} bgcolor={`${colors.white}`}>
                <Typography fontSize={"25px"} fontWeight={"500"} variant="h6">{title}</Typography>
            </Box>
        </Stack>
    )
}