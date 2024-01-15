import { TextField,  } from "@mui/material";

import "../../../../../global.css"
import { useRef } from "react";

export default function ActiveFocus() {
  const inputRef = useRef();
   
  return (
    <TextField
     className="custom-for-all"
      id="standard-basic"
      label="Padrão"
      variant="standard"
      placeholder="Placeholder"
      focused
      inputRef={inputRef}
      fullWidth
    />
  );
}