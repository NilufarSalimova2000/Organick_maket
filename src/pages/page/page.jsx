import { Box } from "@mui/material";
import React from "react";
import { PageBanner } from "../../components/page-banner";
import { pageHero } from "../../data/data";

export const Page = () => {
    return (
        <Box>
            {pageHero?.slice(5, 6).map((item) => {
                return <PageBanner key={item.id} bgImag={item.bgImag} title={item.title} />
            })}
        </Box>

    )
}