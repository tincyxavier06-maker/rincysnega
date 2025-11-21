import { AppBar, Grid, Link, Stack, styled, Box,Toolbar, Typography } from '@mui/material'
import React from 'react'

const NewToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  background:'black'
}) 
const NewLink =styled(Link)({
  textDecoration:'none'
})
const Header = () => {
  return (
    <div> 
      
      <AppBar position='static'>
        <NewToolBar> 
            <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src="food.jpg"    // <-- replace with your logo path
            alt="Logo"
            sx={{ width: 45, height: 45, borderRadius: "50%" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            local company
          </Typography>
        </Stack>
          
          <Stack direction='row' justifyContent='space-between' width='25%'>
              <NewLink href='home'>Home</NewLink>
              <NewLink href='about'>About</NewLink>
              <NewLink href='address'>Address</NewLink>
              <NewLink href='contact'>Contact</NewLink>
              
          </Stack>
       </NewToolBar>
      
       <Grid>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      <nav> <NewToolBar> 
     <Typography variant='h4'>DETAILS</Typography>
      <Stack direction='row' justifyContent='space-between' width='50%'>
     <Link href="profile">Profile</Link>
          <Link href="operations">Operations</Link>
          <Link href="products">Products</Link>
          <Link href="customers">Customers</Link>
          <Link href="certifications">Certifications</Link>
          <Link href="ems">EMS</Link>
          <Link href="careers">Careers</Link>
          
         </Stack>
          </NewToolBar>
          </nav>
          </Grid>
          
  </AppBar>
  <br></br><br></br><br></br><br></br>
<br></br> <br></br><br></br><br></br><br></br>
  
   
  </div>
  )
}
export default Header