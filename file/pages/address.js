
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
                ADDRESS
              </Typography>

              <Typography variant="body1" sx={{ opacity: 2 }}>
                1234 Example Street,<br />
            Near City Center,<br />
            Hyderabad, Telangana, India - 500001
               Atoms of radioactive elements can split. According to Albert Einstein,
                mass and energy are interchangeable under certain circumstances.
                 When atoms split, the process is called nuclear fission. 
                 In this case, a small amount of mass is converted into energy. <br/>
                 Thus the energy released cannot do much damage.
                  However, several subatomic particles called neutrons are also emitted during this process.
                   Each neutron will hit a radioactive element releasing more neutrons in the process. 
                   This causes a chain reaction and creates a large amount of energy. 
                   This energy is converted into heat which expands uncontrollably causing an explosion.
                    Hence, atoms do not literally explode. They generate energy that can cause explosions.
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
                src="/about.jpg"
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
