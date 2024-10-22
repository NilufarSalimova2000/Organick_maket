import React from "react";
import { Box, Container, Stack} from "@mui/material";
import { products, pageHero } from "../../data/data";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/card/product-card";
import { PageBanner } from "../../components/page-banner";

export const Shop = () => {
    return (
        <>
            <Box>
                {pageHero?.slice(1, 2).map((item) => {
                    return <PageBanner key={item.id} bgImag={item.bgImag} title={item.title}/>
                })}
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