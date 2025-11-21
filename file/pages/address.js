import { Box,Typography } from "@mui/material"
export default function address() {
  return (
    <Box>
       <Typography variant="body2"
        sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Address</h2>
        1234 Example Street,<br />
            Near City Center,<br />
            Hyderabad, Telangana, India - 500001
           <div className="flex justify-center">
        <img src="/food.jpg" className="rounded-xl shadow" />
        
      </div>
    </div>
     </Typography>
    </Box>
  )
}