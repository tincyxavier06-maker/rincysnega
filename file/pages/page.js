import React from 'react'
import { Box, Typography } from '@mui/material'


import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function page() {
  return (<>
   
    <Header/>
    
    <Box>
      
<Typography variant="body2"
        sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}
      >
   
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <div className="bg-white shadow p-6 rounded-xl">
      
        <h2 className="text-xl font-bold mb-3">Welcome to Our Company</h2>
        
     
          <p> Best Corporation (P) Limited (BCPL) is one of the pioneers in the manufacturing
          of knitted garments at Tirupur, India. BCPL is an integrated textile company
          having operations from spinning to garmenting. Established in 1967 with 25
          machines, it has grown steadily and is today a USD 125 million enterprise.</p>
           </div>
     

      <div className="flex justify-center">
        <img src="/food.jpg" className="rounded-xl shadow" />
        
      </div>
    </div>
   </Typography>
   </Box>
   <Footer/>
    </>
  )
}