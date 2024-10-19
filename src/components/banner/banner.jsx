import {Box, Container, Typography } from "@mui/material";
import React from "react";
import BgImag from "../../assets/img/banner_img.jpg"
import { PrimaryButton } from "../primary-button";

export const Banner = () => {
    return (
        <Box py={"247px"} sx={{
            backgroundImage:`url(${BgImag})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover"}}>
            <Container maxWidth="lg">
                <Box maxWidth={"530px"}>
                    <Typography mb={"8px"} variant="h4">100% Natural Food</Typography>
                    <Typography mb={"23px"} variant="h1">Choose the best healthier way of life</Typography>
                    <PrimaryButton>Explore Now</PrimaryButton>
                </Box>
            </Container>
        </Box>
    )
}