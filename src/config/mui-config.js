import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#274c5b",
            50: "#E6F0F4",
            100: "#C9DFE8",
            200: "#94C0D1",
            300: "#5EA0BA",
            400: "#3D788F",
            500: "#274C5B",
            600: "#1F3C47",
            700: "#172D36",
            800: "#0F1E24",
            900: "#080F12",
            950: "#05090B"
        },
        secondary: {
            main: "#68a47f",
            50: "#EFF5F2",
            100: "#E2EEE7",
            200: "#C3DBCC",
            300: "#A6C9B3",
            400: "#86B698",
            500: "#68A47F",
            600: "#518665",
            700: "#3D664D",
            800: "#284332",
            900: "#15231A",
            950: "#0A100C"
        }
    },
    // components: {
    //     MuiContainer: {
    //         styleOverrides: {
    //             maxWidthXs: {
    //                 maxWidth: "1400px !important",
    //             }
    //         }
    //     },
    // },
    typography: {
        h1: {
            fontWeight: 800,
            fontSize: "70px",
            color: `${colors.primary}`,
        },
        h2: {
            fontWeight: 800,
            fontSize: "50px",
            color: `${colors.primary}`,
        },
        h3:{
            fontWeight: 800,
            fontSize: "40px",
            color: `${colors.primary}`,
        },
        h4: {
            fontWeight: 400,
            fontSize: "36px",
            color: `${colors.secondary}`,
            fontFamily: "'Yellowtail', serif",
        },
        h5: {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "165%",
            color: `${colors.primary}`,
            transition: "0,4s",
            '&:hover': {
                color: `${colors.secondary}`,
            }
        },
        h6: {
            fontWeight: 600,
            fontSize: "18px",
            color: `${colors.primary}`,
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "165%",
            color: `${colors.text}`,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 900,
            lg: 1400,
            xl: 1648,
        }
    }
}

)