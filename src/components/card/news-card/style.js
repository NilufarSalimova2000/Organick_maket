import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";
import { colors } from "../../../config/colors";

export const Date = styled.div`
    width: 82px;
    height: 82px;
    border-radius: 50%;
    padding: 15px 23px;
    font-weight: 800;
    font-size: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.primary.main};
    background-color: ${colors.white};
    position: absolute;
    top: 43px;
    left: 32px;
`
export const Info = styled.div`
    width: 613px;
    border-radius: 31px 34px 30px 30px;
    padding: 46px 57px 60px 57px;
    box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
    background-color: ${colors.white};
    position: absolute;
    top: 262px;
    left: 32px;
`