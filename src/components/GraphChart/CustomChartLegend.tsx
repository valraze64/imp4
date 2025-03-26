import React from "react";
import { Box } from "@mui/material";
import { StyledTypography } from "../Dashboard/Dashboard.styled";

interface LegendItem {
  color: string;
  label: string;
}

interface CustomChartLegendProps {
  items: LegendItem[];
}

const CustomChartLegend: React.FC<CustomChartLegendProps> = ({ items }) => {
  return (
    <div id="legend-container" style={{ margin: "1.1rem 0 0.8rem 0" }}>
    <Box display="flex" justifyContent="center" mt={-3}>
      {items.map((item, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          margin={"0.3rem 0.3rem"}
        //   padding={"0.3rem 0.3rem"}
        >
          <Box
            sx={{
              width: item.label === "Budget" || item.label === "Run Rate" ? 25 : 10,
              height: item.label === "Budget" || item.label === "Run Rate" ? 4 : 12,
              bgcolor: item.color,
              mr: 1,
              marginX: "6px",
              ml: 1,
            }}
          ></Box>
          <StyledTypography variant="caption">{item.label}</StyledTypography>
        </Box>
      ))}
    </Box>
    </div>
  );
};

export default CustomChartLegend;
