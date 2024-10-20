import { Box, Container, Stack, Typography } from "@mui/material";
import Banner from "../../assets/img/about_page_bg.png"
import AboutUsImag from "../../assets/img/about_page_hero.png";
import { TractorIcon } from "../../assets/icons/tractor-icon";
import { CircleIcon } from "../../assets/icons/circle-icon";
import ChooseImag from "../../assets/img/choose_img.png";
import React from "react";
import { SecondaryButton } from "../../components/secondary-button";
import { colors } from "../../config/colors";
import { services, experts, offer } from "../../data/data";
import { ServiceCard } from "../../components/card/service-card";
import { ExpertCard } from "../../components/card/expert-card";
import { OfferCard } from "../../components/card/offer-card";

export const About = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} py={"200px"}>
                <Container maxWidth={"lg"}>
                    <Typography textAlign={"center"} variant="h2">About Us</Typography>
                </Container>
            </Box>

            <Box pt={"140px"} pb={"103px"}>
                <Container maxWidth={"xl"}>
                    <Stack direction={"row"} alignItems={"center"} gap={"84px"}>
                        <Box>
                            <img src={AboutUsImag} alt="" />
                        </Box>
                        <Stack justifyContent="end" alignItems="flex-end">
                            <Box maxWidth={"675px"}>
                                <Typography mb={"8px"} variant="h4">About Us</Typography>
                                <Typography maxWidth={"550px"} mb={"14px"} variant="h2">We do Creative Things for Success</Typography>
                                <Typography mb={"46px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                                <Typography mb={"46px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                                <Stack mb={"58px"} direction={"row"} gap={"65px"}>
                                    <Stack direction={"row"} gap={"15px"} maxWidth={"292px"}>
                                        <TractorIcon />
                                        <Typography mb={"7px"} fontWeight={"500"} fontSize={"25px"} variant="h3">Modern Agriculture Equipment
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} gap={"15px"} maxWidth={"292px"}>
                                        <TractorIcon />
                                        <Typography mb={"7px"} fontWeight={"500"} fontSize={"25px"} variant="h3">No growth hormones are used
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <SecondaryButton>Explore More</SecondaryButton>
                            </Box>

                        </Stack>
                    </Stack>
                </Container>


            </Box>

            <Box py={"190px"} bgcolor={`${colors.cardBg}`}>
                <Container maxWidth={"lg"}>
                    <Stack mb={"91px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box maxWidth={"670px"} >
                            <Typography mb={"6px"} variant="h4">Why Choose us?</Typography>
                            <Typography mb={"25px"} variant="h2">We do not buy from the open market & traders.</Typography>
                            <Typography mb={"36px"} variant="body1">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Typography>
                            <Stack mb={"12px"} maxWidth={"360px"} direction={"row"} alignItems={"center"} gap={"7px"} borderRadius={"49px"} padding={"29px 91px 29px 29px"} bgcolor={"#ececec"}>
                                <CircleIcon />
                                <Typography fontWeight={"500"} fontSize={"20px"} variant="h6">100% Natural Product</Typography>
                            </Stack>
                            <Typography mb={"24px"} ml={"60px"} maxWidth={"445px"} variant="body1">Simply dummy text of the printing and typesetting industry Lorem Ipsum</Typography>
                            <Stack mb={"12px"} maxWidth={"360px"} direction={"row"} alignItems={"center"} gap={"7px"} borderRadius={"49px"} padding={"29px 91px 29px 29px"} bgcolor={"#ececec"}>
                                <CircleIcon />
                                <Typography fontWeight={"500"} fontSize={"20px"} variant="h6"> Increases resistance</Typography>
                            </Stack>
                            <Typography ml={"60px"} maxWidth={"445px"} variant="body1">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</Typography>
                        </Box>
                        <Box>
                            <img src={ChooseImag} alt="imag" />
                        </Box>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"center"} gap={"30px"}>
                        {services?.map((item) => {
                            return <ServiceCard key={item.id} icon={item.icon} title={item.title} info={item.info}/>
                        })}
                    </Stack>
                </Container>
            </Box>

            <Box py={"180px"}>
                <Container maxWidth={"lg"}>
                    <Stack textAlign={"center"} mb={"42px"}>
                        <Typography variant="h4">Team</Typography>
                        <Typography mb={"16px"} variant="h2">Our Organic Experts</Typography>
                        <Typography maxWidth={"852px"} mx={"auto"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {experts?.map((item) => {
                            return <ExpertCard key={item.id} img={item.img} name={item.name} work={item.work}/>
                        })}
                    </Stack>
                </Container>
            </Box>

            <Box py={"188px"} bgcolor={`${colors.primary}`}>
                <Container maxWidth={"lg"}>
                    <Typography mb={"8px"} textAlign={"center"} variant="h4">About Us</Typography>
                    <Typography mb={"33px"} textAlign={"center"} color={`${colors.white}`} variant="h2">What We Offer for You</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {offer?.map((item) => {
                            return <OfferCard key={item.id} img={item.img} title={item.title}/>
                        })}
                    </Stack>
                </Container>
            </Box>
        </>
    )
}