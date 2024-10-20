import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../config/colors";

export const OfferCard = ({img, title}) => {
    return (
        <Box maxHeight={"334px"} sx={{
            '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'all 0.4s ease', 
            },
        }}>
            <Box borderRadius={"30px"} bgcolor={`${colors.white}`} width={"100%"} mb={"24px"} maxWidth={"334px"}>
                <img src={img} alt="imag" />
            </Box>
            <Typography textAlign={'center'} fontSize={"25px"} fontWeight={"500"} color={`${colors.white}`} variant="h6">{title}</Typography>
        </Box>
    )
}