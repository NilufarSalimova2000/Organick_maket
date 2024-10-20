import styled from '@emotion/styled'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../config/colors';
import { FooterIcon1 } from '../../../assets/icons/footer-icon1';
import { FooterIcon2 } from '../../../assets/icons/footer-icon2';
import { FooterIcon3 } from '../../../assets/icons/footer-icon3';
import { theme } from '../../../config/mui-config';

const CustomCard = styled.div`
    border-radius: 30px;
    background-color: ${colors.cardBg};
    transition: all 0.4s ease;
    &:hover {
        background-color: ${colors.white};
        transform: scale(1.05);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
`
const CustomIconButton = styled(IconButton)`
    color: ${theme.palette.primary.main};
    transition: all 0.4 s ease;
    &:hover {
        color: ${theme.palette.secondary[600]};
    }
`

export const ExpertCard = ({img, name, work}) => {
  return (
    <CustomCard>
        <Box>
            <img src={img} alt="imag" />
        </Box>
        <Box py={"35px"} px={"28px"}>
            <Typography mb={"2px"} fontSize={"25px"} variant='h3'>{name}</Typography>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography fontSize={"22px"} variant='h4'>{work}</Typography>
                <Stack direction={"row"} gap={"17px"}>
                    <CustomIconButton><FooterIcon1 /></CustomIconButton>
                    <CustomIconButton><FooterIcon2 /></CustomIconButton>
                    <CustomIconButton><FooterIcon3 /></CustomIconButton>
                </Stack>
            </Stack>
            
        </Box>
    </CustomCard>
  )
}

