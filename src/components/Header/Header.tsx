import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Header() {
    const [value, setValue] = React.useState(0);


    const TabStylesSx = {

                            color: "white",
                            "&.Mui-selected": {

                                // backgroundColor: "#ffffff",
                                textDecoration: "underline",
                                textUnderlineOffset: "40%",
                                color: "#00dad6",
                                "&:hover": {
                                    // backgroundColor: "#ffffff",
                                },
                            },
                            "&.MuiBottomNavigationAction-label": {
                                color: "red",
                                border: "10px solid red",
                                textDecoration: "underline"
                            }

    }
    return (
        <Box
        // sx={{ width: "99%", backgroundColor: "red" }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // mt={1}
                paddingLeft="10px"
                bgcolor="#0000a0"
                color="white"
            >
                MARS | Overheads
                <BottomNavigation
                    showLabels
                    value={value}
                    color="white"
                    sx={{
                        color: "white",
                        backgroundColor: "#0000a0",
                        "&.Mui-selected": {
                            backgroundColor: "#ffffff",
                            color: "#ffffff",
                            "&:hover": {
                                backgroundColor: "#ffffff",
                            },
                        },
                    }}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Summary" sx={TabStylesSx}
                        // sx={{
                        //     color: "white",
                        //     "&.Mui-selected": {
                        //         // backgroundColor: "#ffffff",
                        //         color: "#ffffff",
                        //         "&:hover": {
                        //             // backgroundColor: "#ffffff",
                        //         },
                        //     },
                        // }}
                    />
                    <BottomNavigationAction sx={TabStylesSx} label="Tab 2" />
                    <BottomNavigationAction sx={TabStylesSx} label="Tab 3" />
                    <BottomNavigationAction sx={TabStylesSx} label="profile icon" />
                </BottomNavigation>
            </Box>
        </Box>
    );
}
