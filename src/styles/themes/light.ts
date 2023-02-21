import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        primary: {
            main:blue[600],
            dark:blue[800],
            light:blue[500],
            contrastText:'#fff'
        },
        secondary: {
            main:purple[500],
            dark:purple[900],
            light:purple[400],
            contrastText:'#fff'
        },
        background: {
            default: purple[900],
        }
    }
})