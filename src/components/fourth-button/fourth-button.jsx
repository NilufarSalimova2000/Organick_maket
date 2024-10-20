import React from "react";
import { StyledFourthButton } from "./style";

export const FourthButton = ({children, onClick, type="button", ...res}) => {
    return (
        <StyledFourthButton {...res} type={type} onClick={onClick}>{children}</StyledFourthButton>
    )
}