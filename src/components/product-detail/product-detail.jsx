import React from "react";
import { products } from "../../data/data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Container, Rating, Stack, Typography } from "@mui/material";
import Banner from "../../assets/img/product-detail-banner.jpg"
import { Sale, TypeBox } from "../card/product-card/style";
import { SecondaryButton } from "../secondary-button";
import styled from "@emotion/styled";
import { theme } from "../../config/mui-config";
import { colors } from "../../config/colors";
import { ProductCard } from "../card/product-card";
import { Link } from "react-router-dom";
import { NotFound } from "../not-found";

export const ProductDeatil = () => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const product = products.find((item) => item.id == parseInt(id));
    if (!product) {
        return <NotFound />;
    }


    const QuantityBtn = styled(Button)`
        border: 2px solid ${theme.palette.primary.main};
        border-radius: 16px;
        padding: 28px 61px 29px 61px;
        background-color: ${colors.white};
        font-weight: 700;
        font-size: 20px;
        color: ${theme.palette.primary.main};
    `

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} py={"200px"}>
                <Container maxWidth={"lg"}>
                    <Typography textAlign={"center"} variant="h2">Shop Single</Typography>
                </Container>
            </Box>

            <Box my={"135px"}>
                <Container maxWidth={"lg"}>
                    {product && (
                        <Stack mb={"90px"} direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"88px"}>
                            <Box boxShadow={"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"} padding={"38px 35px"} borderRadius={"30px"} maxWidth={"591px"}>
                                <TypeBox>{product.type}</TypeBox>
                                <Box><img width={"540px"} height={"540px"} src={product.img} alt="imag" />
                                </Box>
                            </Box>
                            <Box maxWidth={"658px"}>
                                <Typography mb={"9px"} fontWeight={"600"} variant="h3">{product.title}</Typography>
                                <Rating value={product.raiting} precision={0.5} />
                                <Stack direction={"row"} alignItems={"center"} gap={"8px"} mb={"20px"}>
                                    <Sale>${product.saleprice}</Sale>
                                    <Typography fontWeight={700} variant="h6">${product.price}</Typography>
                                </Stack>
                                <Typography mb={"35px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                                <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                                    <Typography fontWeight={"700"} fontSize={"20px"} variant="h6">Quantity :</Typography>
                                    <QuantityBtn>1</QuantityBtn>
                                    <SecondaryButton>Add To Cart</SecondaryButton>
                                </Stack>
                            </Box>
                        </Stack>
                    )}
                    <Stack>
                        <Stack mb={"27px"} direction={"row"} gap={"20px"} justifyContent={"center"}>
                            <SecondaryButton>Product Description</SecondaryButton>
                            <QuantityBtn>Additional Info</QuantityBtn>
                        </Stack>
                        <Typography mx={"auto"} maxWidth={"1137px"} textAlign={"center"} variant="body1">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</Typography>
                    </Stack>
                </Container>
            </Box>

            <Box>
                <Container maxWidth={"lg"}>
                    <Typography mb={"40px"} textAlign={"center"} variant="h2">Related Products</Typography>
                    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} rowGap={"20px"}>
                        {products?.slice(0, 4).map((item) => {
                            return <Link style={{ textDecoration: "none" }} to={`/product/${item.id}`}><ProductCard key={item.id} type={item.type} img={item.img} title={item.title} saleprice={item.saleprice} price={item.price} raiting={item.price} />
                            </Link>
                        })}

                    </Stack>
                </Container>
            </Box>
        </>


    )
}