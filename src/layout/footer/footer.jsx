import { Box, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { Buttons } from "./components/buttons";
import { Newsletter } from "../../components/newsletter"

export const Footer = () => {
    return (
        <Box>
            <Newsletter />
            <Box pb={"102px"} borderBottom={"1px solid #d4d4d4"}>
                <Container maxWidth={"md"}>
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Box pr={"51px"} pb={"36px"} textAlign={"end"} borderRight={"1px solid #d4d4d4"}>
                            <Link href="#" underline="hover">
                                <Typography fontSize={"30px"} fontWeight={"700"} variant="h3">Contact Us</Typography>
                            </Link>
                            <Typography mt={"32px"} fontWeight={"700"} variant="body1">Email</Typography>
                            <Link href="#" underline="hover">
                                <Typography variant="body1">needhelp@Organia.com</Typography>
                            </Link>
                            <Typography mt={"32px"} fontWeight={"700"} variant="body1">Phone</Typography>
                            <Link href="#" underline="hover">
                                <Typography variant="body1">666 888 888</Typography>
                            </Link>
                            <Typography mt={"32px"} fontWeight={"700"} variant="body1">Address</Typography>
                            <Link href="#" underline="hover">
                                <Typography variant="body1">88 road, borklyn street, USA</Typography>
                            </Link>
                        </Box>
                        <Box marginRight={"auto"} marginLeft={"auto"} maxWidth={"543px"} textAlign={"center"}>
                            <NavLink to={"/"}>
                                <img src={Logo} alt="logo" />
                            </NavLink>
                            <Typography mt={"23px"} mb={"49px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </Typography>
                            <Buttons />
                        </Box>
                        <Box pl={"51px"} pb={"36px"} textAlign={"start"} borderLeft={"1px solid #d4d4d4"}>
                            <Link href="#" underline="hover">
                                <Typography fontSize={"30px"} fontWeight={"700"} variant="h3">Utility Pages</Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography mt={"32px"} variant="body1">Style Guide</Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography mt={"16px"} variant="body1">404 Not Found</Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography mt={"16px"} variant="body1">Password Protected</Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography mt={"16px"} variant="body1">Licences</Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography mt={"16px"} variant="body1">Changelog</Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box py={"17px"}>
                <Container maxWidth={"md"}>
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Link flex={""} href="#" underline="hover">
                            <Typography display={"inline"} variant="body1">Copyright © <Typography display={"inline"} fontWeight={"700"} variant="body1">Organick</Typography> Organick | Designed by <Typography display={"inline"} fontWeight={"700"} variant="body1"> VictorFlow</Typography> Templates - Powered by <Typography display={"inline"} fontWeight={"700"} variant="body1"> Webflow</Typography> </Typography>
                        </Link>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}