import { Box, Container, Stack, Typography } from "@mui/material";
import BgImag from "../../assets/img/newsletter_bg.png"
import React from "react";
import { colors } from "../../config/colors";
import { Input } from "./style";
import { FourthButton } from "../fourth-button";

export const Newsletter = () => {
    return (
        <Box pt={"89px"} pb={"117px"}>
            <Container maxWidth={"lg"}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"40px"} px={"71px"} py={"105px"} sx={{
                    backgroundImage: `url(${BgImag})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <Typography maxWidth={"403px"} color={`${colors.white}`} variant="h2">Subscribe to our Newsletter</Typography>
                    <Stack direction={"row"} gap={"6px"}>
                        <Input placeholder="Your Email Address" />
                        <FourthButton>Subscribe</FourthButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>

    )
}