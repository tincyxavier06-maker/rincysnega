

import {
  AppBar, Toolbar, Link, Stack, Box, Typography, styled,} from "@mui/material";
import React from "react";


const NewToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "black",
});

const NewLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  "&:hover": {
    color: "#f0c14b",
  },
});

export default function Header() {
  return (
    <>
      
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1200 }}>

        
        <AppBar position="static" elevation={4}>
          <NewToolBar>
            
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src="/NEWLOG.jpg"
                alt="Logo"
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                Local Company
              </Typography>
            </Stack>

            
            <Stack direction="row" spacing={3}>
              <NewLink href="/home">Home</NewLink>
              <NewLink href="/about">About</NewLink>
              <NewLink href="/address">Address</NewLink>
              
            </Stack>
          </NewToolBar>
        </AppBar>

        
        <AppBar position="static" sx={{ background: "#443a3ade" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="white">
              DETAILS
            </Typography>

            <Stack direction="row" spacing={3}>
              <NewLink href="/profile">Profile</NewLink>
              <NewLink href="/operations">Operations</NewLink>
              <NewLink href="/products">Products</NewLink>
              <NewLink href="/customers">Customers</NewLink>
              <NewLink href="/certifications">Certifications</NewLink>
              <NewLink href="/careers">Careers</NewLink>
            </Stack>
          </Toolbar>
        </AppBar>

      </Box>

      
      <Box sx={{ height: "140px" }} />
    </>
  );
}
