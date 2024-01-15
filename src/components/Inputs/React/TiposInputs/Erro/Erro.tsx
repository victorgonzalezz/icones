import { TextField } from "@mui/material";
import { VscError } from "react-icons/vsc";

import "./style.css"

import "../../../../../global.css"

export default function Erro() {
  return (
    <>
      <TextField
        className="custom-for-all"
        error
        id="standard-error-helper-text"
        label="Erro"
        defaultValue="Valor"
        helperText="Mensagem de erro."
        variant="standard"
        fullWidth
      />
      <div className="custom-icon-error-helperText">
        <VscError />
      </div>
    </>
  )
}
