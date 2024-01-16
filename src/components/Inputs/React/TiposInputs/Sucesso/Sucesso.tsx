import { FormHelperText, TextField, ThemeProvider, createTheme } from "@mui/material";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./style.css"

import "../../../../../global.css"

const theme = createTheme({
  palette: {
    success: {
      main: '#086203',
    },
  },
});

export default function Sucesso() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField 
          className="custom-for-all"
          label="Sucesso"
          color="success"
          defaultValue="Valor"
          variant="standard"
          focused
          fullWidth
        />
        <div className="custom-icon-sucesso-helperText">
          <IoIosCheckmarkCircleOutline />
        </div>
        <FormHelperText sx={{ color: theme.palette.success.main }}>
          Mensagem de sucesso.
        </FormHelperText>
      </ThemeProvider> 
    </>
  )
}
