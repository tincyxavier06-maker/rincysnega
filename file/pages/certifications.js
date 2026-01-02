"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Certifications() {
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
                CERTIFICATIONS
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Best Corporation (P) Limited (BCPL) is one of the pioneers in the
                manufacturing of knitted garments at Tirupur, India. BCPL is an
                integrated textile company having operations from spinning to
                garmenting. Established in 1967 with 25 machines, it has grown
                steadily and is today a USD 125 million enterprise.
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
                src="/brands.jpg"
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
