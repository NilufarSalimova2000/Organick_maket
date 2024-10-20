import React from "react";
import { StyledThirdyButton } from "../thirdy-button/style";
import { PrimaryButtonIcon } from "../../assets/icons/primary-button-icon";

export const ThirdyButton = ({children, onClick, type="button", ...res}) => {
    return (
        <StyledThirdyButton endIcon={<PrimaryButtonIcon />} {...res} type={type} onClick={onClick}>{children}</StyledThirdyButton>
    )
}