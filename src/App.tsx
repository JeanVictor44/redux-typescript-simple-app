import { Box, Button,TextField,ThemeProvider,Typography, makeStyles} from "@mui/material"
import { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { LightTheme } from "./styles/themes"
import { width } from "@mui/system"

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
    <Box
      sx={{
        width:600,
        height:800,
        margin:'80px auto',
        backgroundColor:"Background"
      }}
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"

    >
      <CssBaseline />
      <Typography variant="h2"fontWeight="bold" component="h1" textAlign="center" mt={5}>Redux Bank</Typography>
      

        <Box
          mt={10}
          sx={{
            backgroundColor: "purple",
            color:'#fff',
            width:"60%"
          }}
        >

          <Typography 
            variant="h2" 
            component="h3" 
            textAlign="center"
          >
            0
          </Typography>
        </Box>
      
      <Box 
        marginTop={5}
        sx={{
          width:'60%'
        }}
      >
        <TextField 
          variant="filled"
          fullWidth
          label="Valor"
          type={"number"}
        />
        
        <Box 
          display="flex" 
          gap="10px" 
          flexDirection="column" 
          mt={4}
        >
          <Button variant="contained" color="secondary">Depositar</Button>
          <Button variant="contained" color="secondary" >Sacar</Button>
          <Button variant="contained" color="secondary" >Falir</Button>

        </Box>
      </Box>

     
    </Box>
    </ThemeProvider>
  )
}

export default App
