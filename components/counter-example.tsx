"use client"

import { useNavigate, Route, Routes } from "react-router-dom"
import { Button } from "@mui/material"


function App() {
  const navigate = useNavigate()

  return (
    <>
      {/* Button to navigate to Counter */}
      <Button variant="contained" onClick={() => navigate("/count")} style={{ margin: "20px" }}>
        Counter
      </Button>

      {/* Routes */}
      <Routes>
        <Route path="/count" element={<div>Counter goes here</div>} />
      </Routes>
    </>
  )
}

export default App
