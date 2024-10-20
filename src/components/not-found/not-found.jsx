import React from "react";
import Imag from "../../assets/img/not_found.png"
import { Box } from "@mui/material";

export const NotFound = () => {
    return (
        // <Box sx={{
        //     backgroundImage: `url(${Imag})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover"
        // }}></Box>
        <img width={"100%"} src={Imag} alt="" />
    )
}