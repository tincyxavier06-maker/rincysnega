"use client";

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  // rename prop to avoid shadowing the global `window`
  const { children, targetWindow } = props;

  // compute the actual window object (if available)
  const win = targetWindow ? targetWindow() : (typeof window !== "undefined" ? window : undefined);

  const trigger = useScrollTrigger({
    target: win,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    if (!win) return; // guard for SSR or missing window
    win.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2000 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  // renamed prop
  targetWindow: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      {/* Sample AppBar */}
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      {/* pass props through; if you're using Next's custom window for iframes/testing, pass targetWindow */}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
