import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import MenuOpen, { MenuClose } from "./Menu";
import LogoOpen, { LogoClose } from "./Logo";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoOpen />
          <MenuOpen
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <LogoClose />

          <MenuClose handleCloseNavMenu={handleCloseNavMenu} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
