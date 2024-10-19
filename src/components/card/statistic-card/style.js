import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";
import { colors } from "../../../config/colors";

export const CustomCard = styled.div`
    border-radius: 50%;
    width: 212px;
    height: 212px;
    border: 5px solid ${theme.palette.secondary[400]};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledCard = styled.div`
    border-radius: 50%;
    width: 190px;
    height: 190px;
    background-color: ${colors.circle};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`