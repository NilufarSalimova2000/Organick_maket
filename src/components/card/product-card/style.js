import styled from "@emotion/styled";
import { colors } from "../../../config/colors";
import { theme } from "../../../config/mui-config";

export const CardWrapper = styled.div`
    border-radius: 30px;
    border: 2px solid ${colors.cardBg};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    width: 335px;
    padding: 30px 30px 17px 30px;
    background-color: ${colors.white};
    transition: all 0.4s ease;
    &:hover {
        transform: scale(1.05);
    }
`
export const TypeBox = styled.div`
    border-radius: 8px;
    padding: 5px 12px 6px 12px;
    background-color: ${theme.palette.primary.main};
    font-weight: 600;
    font-size: 15px;
    color: ${colors.white};
    display: inline;
`
export const Sale = styled.p`
    font-weight: 600;
    font-size: 15px;
    color: ${colors.sale};
    text-decoration: line-through;
`
export const Line = styled.span`
    border-bottom: 1px solid ${colors.line};
    display: block;
`