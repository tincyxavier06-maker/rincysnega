

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Customers() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box className="bg-white p-6 rounded-xl shadow">
              <Typography variant="h4" fontWeight="bold" mb={2}>
              ABOUT
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.8 }}>
               Local Company(@)
DMart is a one-stop supermarket chain that aims to offer customers a wide range of basic home

Founder(s): Radhakishan Damani

Location: Mumbai, Maharashtra, India

Industries: Local Shopping, Retail, Supply Chain Management

Follow:

Linkedin
Website
Twitter
Crunchbase,The company profile enables the company to establish its key difference from competitors and thus show why it matters to the public. As long as marketing is concerned, this is a crucial first step. 
The company profile enables the company to establish its key difference from competitors and thus show why it matters to the public. As long as marketing is concerned, this is a crucial first step. The company profile enables the company to establish its key difference from competitors and thus show why it matters to the public. As long as marketing is concerned, this is a crucial first step. 

              </Typography>
            </Box>
          </motion.div>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Box className="flex justify-center">
              <img
                src="/emp.jpg"
                
                className="rounded-xl shadow max-w-full"
                alt="Product Image"
              />
            </Box>
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
}
