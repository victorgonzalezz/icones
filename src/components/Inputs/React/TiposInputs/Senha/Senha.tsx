import { InputAdornment, TextField } from "@mui/material";
import { PiEyeClosed } from "react-icons/pi";

import "./style.css"

export default function Senha() {
  return (
    <TextField
      className="custom-for-all"
      id="standard-password-input"
      label="Senha"
      type="password"
      autoComplete="current-password"
      variant="standard"
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="end">
          <PiEyeClosed className="eye" />
        </InputAdornment>,
      }}
    />
  )
}
