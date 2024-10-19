import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { Search } from "./components/search";

export const Header = () => {
    return (
        <Box py={"70px"}>
            <Container maxWidth="xl">
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Link to={"/"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <Stack direction={"row"} gap={"30px"}>
                        <Link style={{textDecoration:"none"}} to={"/"}>
                            <Typography variant="h5">Home</Typography>
                        </Link>
                        <Link style={{textDecoration:"none"}} to={"/about"}>
                            <Typography variant="h5">About</Typography>
                        </Link>
                        <Link style={{textDecoration:"none"}} to={"/pages"}>
                            <Typography variant="h5">Pages</Typography>
                        </Link>
                        <Link style={{textDecoration:"none"}} to={"/shop"}>
                            <Typography variant="h5">Shop</Typography>
                        </Link>
                        <Link style={{textDecoration:"none"}} to={"/projects"}>
                            <Typography variant="h5">Projects</Typography>
                        </Link>
                        <Link style={{textDecoration:"none"}} to={"/news"}>
                            <Typography variant="h5">News</Typography>
                        </Link>
                    </Stack>
                    <Search />
                </Stack>
            </Container>
        </Box>
    )
}