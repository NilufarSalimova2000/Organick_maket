import React from "react";
import { Banner } from "../../components/banner";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import { data, products, statistics } from "../../data/data";
import { InfoCard } from "../../components/card/info-card";
import AboutBg from "../../assets/img/about_bg.png";
import TestimonialBg from "../../assets/img/testimonial_bg.png";
import TestimonialImag from "../../assets/img/testimonial_img.png";
import EcoBg from "../../assets/img/eco_bg.png";
import { AboutIcon1 } from "../../assets/icons/about-icon1";
import { AboutIcon2 } from "../../assets/icons/about-icon2";
import { SecondaryButton } from "../../components/secondary-button";
import { ProductCard } from "../../components/card/product-card";
import { Link } from "react-router-dom";
import { Line } from "../../components/card/product-card/style";
import { StatisticCard } from "../../components/card/statistic-card";
import { theme } from "../../config/mui-config";
import { colors } from "../../config/colors";
import { PrimaryButton } from "../../components/primary-button";

export const Home = () => {
    return (
        <>
            <Banner />

            <Box pt={"154px"} pb={"190px"}>
                <Container maxWidth={"lg"}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {data?.map((item) => {
                            return <InfoCard key={item.id} info={item.info} title={item.title} bgimag={item.bgimag} />
                        })}
                    </Stack>
                </Container>
            </Box>

            <Box pt={"186px"} pb={"199px"} sx={{
                backgroundImage: `url(${AboutBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Container maxWidth={"lg"}>
                    <Stack justifyContent="end" alignItems="flex-end">
                        <Box maxWidth={"702px"}>
                            <Typography mb={"8px"} variant="h4">About Us</Typography>
                            <Typography mb={"14px"} variant="h2">We Believe in Working Accredited Farmers</Typography>
                            <Typography mb={"46px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                            <Stack mb={"30px"} direction={"row"} gap={"19px"}>
                                <AboutIcon1 />
                                <Box maxWidth={"444px"}>
                                    <Typography mb={"7px"} fontSize={"25px"} variant="h3">Organic Foods Only</Typography>
                                    <Typography variant="body1">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                                </Box>
                            </Stack>
                            <Stack mb={"46px"} direction={"row"} gap={"19px"}>
                                <AboutIcon2 />
                                <Box maxWidth={"444px"}>
                                    <Typography mb={"7px"} fontSize={"25px"} variant="h3">Quality Standards</Typography>
                                    <Typography variant="body1">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                                </Box>
                            </Stack>
                            <SecondaryButton>Shop Now</SecondaryButton>
                        </Box>

                    </Stack>
                </Container>
            </Box>

            <Box pt={"176px"} pb={"200px"}>
                <Container maxWidth={"lg"}>
                    <Typography mb={"8px"} textAlign={"center"} variant="h4">Categories </Typography>
                    <Typography mb={"40px"} textAlign={"center"} variant="h2">Our Products</Typography>
                    <Stack mb={"122px"} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} rowGap={"20px"}>
                        {products?.slice(0, 8).map((item) => {
                            return <Link style={{ textDecoration: "none" }} to={`/product/${item.id}`}><ProductCard key={item.id} type={item.type} img={item.img} title={item.title} saleprice={item.saleprice} price={item.price} raiting={item.price} />
                            </Link>
                        })}

                    </Stack>
                    <Stack maxWidth={"270px"} marginRight={"auto"} marginLeft={"auto"} >
                        <SecondaryButton>Load More</SecondaryButton>
                    </Stack>

                </Container>
            </Box>

            <Box py={"164px"} sx={{
                backgroundImage: `url(${TestimonialBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Container maxWidth={"lg"}>
                    <Box textAlign={"center"}>
                        <Typography mb={"8px"} variant="h4">Testimonial</Typography>
                        <Typography mb={"60px"} variant="h2">What Our Customer Saying?</Typography>
                        <Box mb={"20px"}><img src={TestimonialImag} alt="imag" /></Box>
                        <Rating value={5} precision={0.5} />
                        <Typography my={"20px"} marginRight={"auto"} marginLeft={"auto"} maxWidth={"780px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Typography>
                        <Typography fontSize={"25px"} variant="h6">Sara Taylor</Typography>
                        <Typography mb={"129px"} fontSize={"15px"} variant="body1">Consumer</Typography>
                        <Line />
                        <Stack direction={"row"} justifyContent={"center"} gap={"62px"} mt={"102px"}>
                            {statistics?.map((item) => {
                                return <StatisticCard key={item.id} count={item.count} title={item.title} />
                            })}
                        </Stack>

                    </Box>
                </Container>
            </Box>

            <Box py={"200px"} bgcolor={`${theme.palette.primary.main}`}>
                <Container maxWidth={"lg"}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"end"} mb={"50px"}>
                        <Box>
                            <Typography mb={"8px"} variant="h4">Offer</Typography>
                            <Typography color="#fff" variant="h2">We Offer Organic For You</Typography>
                        </Box>
                        <PrimaryButton>View All Product</PrimaryButton>
                    </Stack>
                    <Stack mb={"122px"} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} rowGap={"20px"}>
                        {products?.slice(12, 16).map((item) => {
                            return <Link style={{ textDecoration: "none" }} to={`/product/${item.id}`}><ProductCard key={item.id} type={item.type} img={item.img} title={item.title} saleprice={item.saleprice} price={item.price} raiting={item.price} />
                            </Link>
                        })}

                    </Stack>
                </Container>
            </Box>

            <Box py={"100px"} sx={{
                backgroundImage: `url(${EcoBg})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                width: "952px"
            }}>
                <Container maxWidth={"lg"}>
                    
                </Container>
            </Box>
        </>
    )
}