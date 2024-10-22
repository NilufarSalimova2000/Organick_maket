import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const PageBanner = ({title, bgImag}) => {
  return (
    <Box sx={{
        backgroundImage: `url(${bgImag})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }} py={"200px"}>
        <Container maxWidth={"lg"}>
            <Typography textAlign={"center"} variant="h2">{title}</Typography>
        </Container>
    </Box>
  )
}
