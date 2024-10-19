import React from "react";
import { CustomCard, StyledCard } from "./style";
import { Typography } from "@mui/material";

export const StatisticCard = ({count, title}) => {
    return (
        <CustomCard>
            <StyledCard>
                <Typography variant="h2">{count}</Typography>
                <Typography variant="h6">{title}</Typography>
            </StyledCard>
        </CustomCard>
    )
}