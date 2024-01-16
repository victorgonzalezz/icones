import { TextField,  } from "@mui/material";

import "../../../../../global.css"
import { useRef } from "react";

export default function ActiveFocus() {
  const inputRef = useRef();
   
  return (
    <TextField
     className="custom-for-all"
      id="standard-basic"
      label="Activo / Focus"
      variant="standard"
      placeholder="Valor"
      focused
      inputRef={inputRef}
      fullWidth
    />
  );
}