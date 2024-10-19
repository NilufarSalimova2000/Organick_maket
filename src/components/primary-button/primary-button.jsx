import React from "react";
import { StyledPrimaryButton } from "./style";
import { PrimaryButtonIcon } from "../../assets/icons/primary-button-icon";

export const PrimaryButton = ({children, onClick, type="button", ...res}) => {
    return (
        <StyledPrimaryButton endIcon={<PrimaryButtonIcon />} {...res} type={type} onClick={onClick}>{children}</StyledPrimaryButton>
    )
}