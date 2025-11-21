import { Box,Typography } from "@mui/material"

export default function operations() {
  return (
     <Box>
       <Typography variant="body2"
        sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">products</h2>
      <p> Best Corporation (P) Limited (BCPL) is one of the pioneers in the manufacturing
          of knitted garments at Tirupur, India. BCPL is an integrated textile company
          having operations from spinning to garmenting. Established in 1967 with 25
          machines, it has grown steadily and is today a USD 125 million enterprise.</p>

          

           <div className="flex justify-center">
        <img src="/food.jpg" className="rounded-xl shadow" />
        
      </div>
    </div>
     </Typography>
    </Box>
  )
}