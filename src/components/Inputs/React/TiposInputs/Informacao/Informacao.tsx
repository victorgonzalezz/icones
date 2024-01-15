import { TextField } from "@mui/material";
import { MdInfoOutline } from "react-icons/md";

import "./style.css"


import "../../../../../global.css"

export default function Informacao() {
  return (
    <>
      <TextField
        className="custom-for-all"
        label="Informação"
        color="info"
        defaultValue="Valor"
        helperText="Mensagem de info."
        variant="standard"
        focused
        fullWidth
      />
      <div className="custom-icon-info-helperText">
        <MdInfoOutline />
      </div>
    </>
  )
}
