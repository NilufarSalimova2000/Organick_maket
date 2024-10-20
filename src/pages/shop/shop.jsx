import React from "react";
import Banner from "../../assets/img/shop_page_banner.png"
import { Box, Container, Stack, Typography } from "@mui/material";
import { products } from "../../data/data";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/card/product-card";

export const Shop = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} py={"200px"}>
                <Container maxWidth={"lg"}>
                    <Typography textAlign={"center"} variant="h2">Shop</Typography>
                </Container>
            </Box>
            <Box mt={"90px"} mb={"140px"}>
                <Container maxWidth={"lg"}>
                    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} rowGap={"20px"}>
                        {products?.slice(0, 12).map((item) => {
                            return <Link style={{ textDecoration: "none" }} to={`/product/${item.id}`}><ProductCard key={item.id} type={item.type} img={item.img} title={item.title} saleprice={item.saleprice} price={item.price} raiting={item.price} />
                            </Link>
                        })}

                    </Stack>
                </Container>
            </Box>
        </>
    )
}