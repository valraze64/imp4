import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
    MenuItem,
    Select,
    Card,
    CardContent,
    Typography,
    Grid2,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import styled from "styled-components";
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// .Button {
//     color: black;
// }


import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MarsCentra-Book';
    src: url('/assets/fonts/MarsCentra-Book.ttf') format('truetype');
  }

body, * {
  font-family:
  'MarsCentra-Book',
   monospace,serif !important;
}
`;

export const MarsCentraBookFont = createGlobalStyle`
  @font-face {
    font-family: 'MarsCentra-Book';
    src: url('/assets/fonts/MarsCentra-Book.ttf') format('truetype');
  }

  body, {
  font-family:
  'MarsCentra-Book',
   monospace,serif !important;
}
`;
// below are unused for now

const MarsCentraBoldFont = createGlobalStyle`
  @font-face {
    font-family: 'MarsCentra-Bold';
    src: url('/assets/fonts/MarsCentra-Bold.ttf') format('truetype');
  }

    body, {
  font-family:
  'MarsCentra-Bold',
   monospace,serif !important;
  }
`;
const MarsCentraExtraBoldFont = `
  @font-face
font-family: 'MarsCentra-ExtraBold';
    src: url('/assets/fonts/MarsCentra-ExtraBold.ttf') format('truetype');
  }
body, {
font-family:
'MarsCentra-ExtraBold',
monospace,serif !important;
}
`;



// export const DashboardContainer = styled(Box)`
//   ${MarsCentraBookFont}
//   font-family: 'MarsCentra-Book', sans-serif;
//   * {
//     font-family: 'MarsCentra-Book', sans-serif;
//   }
// `;


export const StyledGrid2 = styled(Grid2)({
  borderRadius: "6px",
  border:"2px solid rgb(201, 201, 211)"
});

export const StyledSelect = styled(Select)({
    backgroundColor: "white",
    border: "1px solid #d262626",
    // borderRadius: "100px",
    // padding: "0px",
    // margin: "0px",
    minWidth: "10vw",
    height: "4vh",
})
export const StyledLabel = styled.label({
    display: "flex",
    alignItems: "center",
    // width: "150%",
    padding: "0 2%",
    fontSize: "0.875rem",
    minWidth: "fit-content",

    // fontFamily: ""
    // justifyContent: "center",
    // marginRight: "0 150%"
});
export const StyledSpan = styled.span({
    display: "flex",
    padding: "0 0 0 1.5%",
    alignItems: "center",
    width: "18%",
    // minWidth: "15%",
    // border: "10px solid red",
});
export const StyledPara = styled.p({
    margin:0,
    fontSize: "16px",
    // border: "10px solid red",
    display: "flex",
    justifyContent: "space-around"
});

export const StyledToggleButtonContainer = styled(Box)({
    display: "flex", // Arrange all groups in a single line
    justifyContent: "space-between", // Add spacing between groups
    alignItems: "center", // Align items vertically
    flexWrap: "wrap", // Allow wrapping to the next line on smaller screens
    overflowX: "auto", // Allow horizontal scrolling if needed
    gap: "16px", // Add spacing between groups
    "@media (max-width: 768px)": {
        flexDirection: "column", // Stack groups vertically on smaller screens
        alignItems: "flex-start", // Align items to the start
    },
});

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    // borderColor: '#d9d9d9',
    // '.MuiToggleButtonGroup-firstButton': {
    //     marginLeft: '-1px',
    //     // borderLeft: '4px solid green', // Left border for the first button
    //     borderTopLeftRadius: '4px', // Top-left corner radius
    //     borderBottomLeftRadius: '4px', // Bottom-left corner radius
    // },
    // '.MuiToggleButtonGroup-lastButton': {
    //     marginLeft: '-1px',
    //     // borderColor: '#d9d9d9',
    //     // borderRight: '4px solid green', // Right border for the last button
    //     borderTopRightRadius: '4px',
    //     borderBottomRightRadius: '4px',
    // },
    // '.MuiToggleButtonGroup-middleButton': {
    //     marginLeft: '-1px',
    //     // borderColor: '#d9d9d9',
    //     border: '2px solid #d9d9d9', // Right border for the last button
    //     // borderTopRightRadius: '4px',
    //     // borderBottomRightRadius: '4px',
    // },
    '.MuiToggleButton-root': {
        border: '2.2px solid #d9d9d9',
        backgroundColor: '#ffffff',
        '&.Mui-selected': {
            backgroundColor: '#11236F',
            color: '#ffffff',
            '&:not(:last-of-type)': {
                borderRightColor: '#ffffff',
            },
            '&:not(:first-of-type)': {
                borderLeftColor: '#ffffff',
            },
        },
        '&.Mui-disabled': {
            border: '2.2px solid #d9d9d9',
            backgroundColor: '#f5f5f5',
            color: '#a1a1a1',
        },
    },
    });
export const StyledTypography = styled(Typography)({
fontSize: "0.4rem",
  });
export const sxButton = (year: string, yr: string) => ({
    // borderRadius: "5px",
    fontSize: "0.9rem",
    // fontWeight: "bold",
    // padding:"2% 4%",
    padding:"0.2rem 0.4rem",
    border: "1px solid #f2f2f2",
    // padding:"2% 0.8rem",
    backgroundColor:
      year === yr
        ? "#11236F"
        : "#ffffff",
    color:
      year === yr
        ? "#ffffff"
        : "#000000",
    "&.Mui-selected": {
      backgroundColor: "#11236F",
      color: "#ffffff",
    //   padding:"0.4rem 0.8rem",
      "&:hover": {
        backgroundColor:
          "#11236F",
      },
    },
  });
export const sxSelect ={
        backgroundColor: "white",
            // border: "10px solid red",
            padding: "0px",
            margin: "10px",
  };
// export const StyledSpsan = styled.Grid2({
//     display: "flex",
//     border: "10px solid red",
//     padding: "0 5% 0 10%",
//     // alignItems: "center",
// })

