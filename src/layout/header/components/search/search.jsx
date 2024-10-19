import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { SearchIcon } from "../../../../assets/icons/search-icon";
import { CartIcon } from "../../../../assets/icons/cart-icon";
import React from "react";
import { CartIconButton, CartWrapper, CustomIconButton } from "./style";
import { colors } from "../../../../config/colors";

export const Search = () => {
    return (
        <Stack direction={"row"} gap={"18px"}>
            <TextField
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <CustomIconButton>
                                <SearchIcon />
                            </CustomIconButton>
                        </InputAdornment>
                    ),
                    style: { borderRadius: "36px", backgroundColor: `${colors.inputbg}`,
                    padding: "5px"}, 
                }}
                fullWidth
            />
            <CartWrapper>
                <CartIconButton>
                    <CartIcon />
                </CartIconButton>
                <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', margin: 0 }}>Cart (0)</Typography>
            </CartWrapper>
        </Stack>
    )
}