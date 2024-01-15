import { TextField } from "@mui/material";

import "../../../../../global.css"

export default function Inativo() {
  return (
    <TextField
      className="custom-for-all"
      disabled
      id="standard-disabled"
      label="Inativo"
      defaultValue="Placeholder"
      variant="standard"
      fullWidth
    />

  )
}
