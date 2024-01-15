import { TextField } from "@mui/material";

import "../../../../../global.css"


export default function SomenteLeitura() {
  return (
      <TextField
        className="custom-for-all"  
        id="standard-read-only-input"
        label="Somente Leitura"
        defaultValue="Valor"
        fullWidth
        InputProps={{
            readOnly: true,
        }}
        variant="standard"
    />
  )
}
