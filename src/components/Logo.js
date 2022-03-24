import React from "react";
import { Typography } from "@mui/material";

const LogoOpen = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
      LOGO
    </Typography>
  );
};

const LogoClose = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    >
      LOGO
    </Typography>
  );
};

export default LogoOpen;
export { LogoClose };
