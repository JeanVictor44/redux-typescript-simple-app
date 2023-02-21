import { Box, Button,TextField,ThemeProvider,Typography} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { LightTheme } from "./styles/themes"
import { actionCreators, reduxHook} from './redux'
import { useState } from "react"
import { bindActionCreators } from "redux"
import { selectBankValue } from "./redux/reducers/bankReducer"
import { useAppSelector } from "./redux/reduxHook"

function App() {
  const [moneyValue, setMoneyValue ] = useState(0)

  const dispatch = reduxHook.useAppDispatch()
  const bankValue = useAppSelector(selectBankValue)

  // vincular os criadores de ação com o dispatch
  const { depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)

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
            {
              bankValue
            }
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
          onChange={(ev) => {
            console.log(moneyValue)
            setMoneyValue(Number(ev.target.value))}}
        />
        
        <Box 
          display="flex" 
          gap="10px" 
          flexDirection="column" 
          mt={4}
        >
          <Button variant="contained" color="secondary" onClick={() => depositMoney(moneyValue)}>Depositar</Button>
          <Button variant="contained" color="secondary" onClick={() => withdrawMoney(moneyValue)}>Sacar</Button>
          <Button variant="contained" color="secondary" onClick={() => bankrupt()}>Falir</Button>

        </Box>
      </Box>

     
    </Box>
    </ThemeProvider>
  )
}

export default App
