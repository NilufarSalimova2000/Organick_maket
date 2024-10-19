import React from "react";
import { products } from "../../data/data";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

export const ProductDeatil = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id == parseInt(id));

    return (
        <Container maxWidth={"lg"}>
            {product && (
                <Box><img src={product.img} alt="imag" />
                <Typography>{product.title}</Typography></Box>
            )}
        </Container>
    )
}