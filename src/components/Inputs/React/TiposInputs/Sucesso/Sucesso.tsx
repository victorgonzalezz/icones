import { TextField } from "@mui/material";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./style.css"

import "../../../../../global.css"

export default function Sucesso() {
  return (
    <>
      <TextField
        className="custom-for-all" 
        label="Sucesso"
        color="success"
        defaultValue="Valor"
        helperText="Mensagem de sucesso."
        variant="standard"
        focused
        fullWidth
      />
      <div className="custom-icon-sucesso-helperText">
        <IoIosCheckmarkCircleOutline />
      </div>
    </>
  )
}
