import { Box, Rating, Stack, Typography } from "@mui/material";
import { CardWrapper, TypeBox, Sale, Line } from "./style";
import React from "react";

export const ProductCard = ({type, img, title, saleprice, price, raiting}) => {
    return (
        <CardWrapper>
            <TypeBox>{type}</TypeBox>
            <Box textAlign={"center"} height={"324px"}>
                <img height={"100%"} width={"100%"} src={img} alt="imag" />
            </Box>
            <Typography mb={"13px"} fontSize={"20px"} variant="h6">{title}</Typography>
            <Line />
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                    <Sale>${saleprice}</Sale>
                    <Typography fontWeight={700} variant="h6">${price}</Typography>
                </Stack>
                <Rating value={raiting} precision={0.5}  />
            </Stack>
        </CardWrapper>
    )
}