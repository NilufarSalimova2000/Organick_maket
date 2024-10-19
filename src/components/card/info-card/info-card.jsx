import { Box, Typography } from "@mui/material";
import React from "react";

export const InfoCard = ({info, title, bgimag}) => {
    return (
        <Box flexGrow={1} borderRadius={"40px"} py={"110px"} px={"55px"} maxWidth={"628px"} sx={{backgroundImage: `url(${bgimag})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain"}}>
            <Typography mb={"5px"} variant="h4">{info}</Typography>
            <Typography maxWidth={"320px"} variant="h3">{title}</Typography>
        </Box>
    )
}