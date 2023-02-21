import { Box, Button,TextField,ThemeProvider,Typography, makeStyles} from "@mui/material"
import { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { LightTheme } from "./styles/themes"

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
      <Typography variant="h2" component="h1" textAlign="center" mt={5}>Redux Bank</Typography>
      
      <Box 
        marginTop={10}
        sx={{
          width:'90%'
        }}
      >
        <TextField 
          helperText="digite um valor" 
          variant="filled"
          fullWidth
          label="Valor"
        
        />
        
        <Box 
          display="flex" 
          gap="10px" 
          flexDirection="column" 
        >
          <Button variant="contained" color="secondary">Depositar</Button>
          <Button variant="contained" color="secondary" >Sacar</Button>
        </Box>
      </Box>

      <Typography variant="h1" component="h1" textAlign="center" mt={15}>
        Valor
      </Typography>
    </Box>
    </ThemeProvider>
  )
}

export default App
