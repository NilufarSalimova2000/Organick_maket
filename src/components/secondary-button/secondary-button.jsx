import React from "react";
import { StyledSecondaryButton } from "./style";
import { PrimaryButtonIcon } from "../../assets/icons/primary-button-icon";

export const SecondaryButton = ({children, onClick, type="button", ...res}) => {
    return (
        <StyledSecondaryButton endIcon={<PrimaryButtonIcon />} {...res} type={type} onClick={onClick}>{children}</StyledSecondaryButton>
    )
}