import React, { useEffect, useState } from "react";
import { Popper, IconButton, Box, Typography, Paper, Grid2 } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InfoIcon2 from "../../assets/info-icon.svg";
 
const RunRateInfo: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [open, setOpen] = useState(false);
 
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    // setOpen(true);
  };
 
  const open = Boolean(anchorEl);
  const id = open ? "run-rate-tooltip" : undefined;
//   const handleClickOutside = (event: MouseEvent) => {
//     if (anchorEl?.contains(event.target as Node)) return;
//     setOpen(false);
//   };
  
//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [anchorEl]);
  return (
    <Box display="inline-block">
      {/* Info Icon */}
<IconButton
  onClick={handleClick}
  size="small"
  aria-describedby={id}
  disableFocusRipple
  sx={{ 
    color: "#ebebf8", 
    p: 0, 
    backgroundColor: "black", 
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "black"
    }
  }}
>
  <InfoIcon fontSize="inherit"  />
</IconButton>
 
      {/* Popper Tooltip */}
<Popper
  id={id}
  open={open}
  anchorEl={anchorEl}
  placement="bottom"
  sx={{ zIndex: 1300 }}
  modifiers={[{
    name: 'offset',
    options: {
      offset: [-110, 0],
    },
  }]}
>
        <Paper
          sx={{
            // p: 1.5,
            // borderRadius: 2,
            boxShadow: 0,
            maxWidth: 220,
            border: "1px solid black",
          }}
        >
            <Grid2 
            container
            display={"flex"}
            justifyContent={"space-between"}
            // border={"10px solid red"}
            borderBottom= "1px solid #4b5563"
            padding= "2% 5%"
            >
          <Typography
            variant="body2"
            // fontWeight="bold"
            sx={{ color: "#4b5563" }}
            >
            Required Run Rate
          </Typography>
              </Grid2>
              <Grid2 
            container
            display={"flex"}
            justifyContent={"space-between"}
            // border={"10px solid red"}
            // borderBottom= "1px solid #4b5563"
            padding= "2% 5%"
            >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#111827", mt: 0.5 }}
          >
            $16.6 K
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", mt: 0.5 }}>
            To stay under budget
          </Typography>
          </Grid2>
        </Paper>
      </Popper>
    </Box>
  );
};
 
export default RunRateInfo;
// import React, { useState } from "react";
// import { Popper, IconButton, Box, Typography, Paper } from "@mui/material";
// import InfoIcon from "@mui/icons-material/Info";
 
// const RunRateInfo: React.FC = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };
 
//   const open = Boolean(anchorEl);
//   const id = open ? "run-rate-tooltip" : undefined;
 
//   return (
//     <Box display="inline-block">
//       {/* Info Icon */}
//       <IconButton
//         onClick={handleClick}
//         size="small"
//         aria-describedby={id}
//         sx={{ color: "#6b7280", p: 0 }} // Tailored color
//       >
//         <InfoIcon fontSize="small" />
//       </IconButton>
 
//       {/* Popper Tooltip */}
//       <Popper
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         placement="bottom-start"
//         sx={{ zIndex: 1300 }}
//       >
//         <Paper
//           sx={{
//             p: 1.5,
//             borderRadius: 2,
//             boxShadow: 3,
//             maxWidth: 220,
//             border: "1px solid #e0e0e0",
//           }}
//         >
//           <Typography
//             variant="body2"
//             fontWeight="bold"
//             sx={{ color: "#4b5563" }}
//           >
//             Required Run Rate
//           </Typography>
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             sx={{ color: "#111827", mt: 0.5 }}
//           >
//             $16.6 K
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#6b7280", mt: 0.5 }}>
//             To stay under budget
//           </Typography>
//         </Paper>
//       </Popper>
//     </Box>
//   );
// };
 
// export default RunRateInfo;