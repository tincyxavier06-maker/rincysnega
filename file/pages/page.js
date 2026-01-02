

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";



export default function Page() {
  return (
    <>
    
      <Box sx={{ padding: "2rem" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 6 }}
        >
          Welcome to Our Company
        </Typography>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white shadow p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-3">INTRODUCTION</h2>

              <Typography variant="body1" sx={{ opacity: 0.8 }}>
Therefore, your homepage description should match the search intent of each caterogie of people.

The first thing you need to figure out is if your website traffic branded or now. You can easily do it in Google Search Console. Click on "Search Results", then go to the "Pages" section and find your homepage. Now check out "Queries" to see what keywords people use to find your homepage.

If most of the keywords contain information about your company (name, pricing, services, working hours, phone number, etc.), then your homepage traffic is branded. That means you want to a company-focused description.

If your traffic is not branded, you'd better write about services your company provides.

But honestly, it's better to combine all these things together and try to fit them in a 156 character count.

We all know that meta descriptions don’t play any role for Google in terms of ranking. Although, they do play a significant role for searchers.

Let’s say you’re looking for dental services in Oklahoma. The first thing you do is going online and typing your query in a browser search field. Then you get a bunch of results along with the headache about which way to go. And this is where homepage meta descriptions come in handy – they provide you with the first impression about the clinic and it’s services.

Having a good homepage meta description for a website crucial. That's because your description is the second (or sometimes THE FIRST) thing consumers will see when they search for something. So make sure to write a description that will highlight all reasons why your company is the way to go.

If you’re struggling with creating a homepage meta description that will sort out your competitors, dive in and check out 49 best meta description examples for 9 different site types to help you create your own.

1. The Balloon Boutique – Transform Any Space into Fun & Festrive Atmosphere
the balloon boutique
The description catches your attention with the word "Free".

Description: Make your next event extraordinary with Beautiful Balloon Decor from The Balloon Boutique! Free quote. Arches, columns, bouquets, centerpieces and MORE!
              </Typography>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex justify-center">
              <img
                src="/home.jpg"
                alt="Company Photo"
                className="rounded-xl shadow max-w-full"
              />
            </div>
          </motion.div>

        </div>
      </Box>

      
    </>
  );
}
