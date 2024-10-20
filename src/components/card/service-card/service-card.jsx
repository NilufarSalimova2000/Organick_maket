import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../config/colors";

export const ServiceCard = ({icon: Icon, title, info}) => {
    return (
        <Box sx={{
            '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'all 0.4s ease', 
            },
        }} bgcolor={`${colors.white}`} textAlign={"center"} maxWidth={"260px"} px={"30px"} py={"50px"} borderRadius={"30px"}>
            <Box mb={"15px"}>
                <Icon />
            </Box>
            <Typography mb={"12px"} fontSize={"20px"} variant="h3">{title}</Typography>
            <Typography width={"184px"} variant="body1">{info}</Typography>
        </Box>
    )
}