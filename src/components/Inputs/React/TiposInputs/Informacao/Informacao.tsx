import { FormHelperText, TextField, ThemeProvider, createTheme } from "@mui/material";
import { MdInfoOutline } from "react-icons/md";

import "./style.css"


import "../../../../../global.css"

const theme = createTheme({
  palette: {
    success: {
      main: "#1976d2",
    },
  },
});


export default function Informacao() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          className="custom-for-all"
          label="Informação"
          color="info"
          defaultValue="Valor"
          variant="standard"
          focused
          fullWidth
        />
        <div className="custom-icon-info-helperText">
          <MdInfoOutline />
        </div>
        <FormHelperText sx={{ color: theme.palette.success.main }}>
          Mensagem de info.
        </FormHelperText>

      </ThemeProvider>
      
    </>
  )
}
