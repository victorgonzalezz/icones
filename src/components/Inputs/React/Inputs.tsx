import "./style.css";
import logoMui from "../../../assets/logos/mui-logo.svg";
import angularLogo from "../../../assets/logos/angular-logo.svg";

import { Grid } from "@mui/material";
import Padrao from "./TiposInputs/Padrao/Padrao";
import Senha from "./TiposInputs/Senha/Senha";
import SomenteLeitura from "./TiposInputs/SomenteLeitura/SomenteLeitura";
import ActiveFocus from "./TiposInputs/ActiveFocus/ActiveFocus";
import Inativo from "./TiposInputs/Inativo/Inativo";
import Erro from "./TiposInputs/Erro/Erro";
import Sucesso from "./TiposInputs/Sucesso/Sucesso";
import Informacao from "./TiposInputs/Informacao/Informacao";

export default function Inputs() {
  return (
    <>
      <Grid className="oi" container spacing={3}>
        <Grid className="teste" item xs={6}>
        <img src={logoMui} alt="Logo Material-UI" /> 
          <Padrao />
          <Senha />
          <ActiveFocus />
          <SomenteLeitura />
          <Inativo />
          <Informacao />
          <Erro />
          <Sucesso />
        </Grid>

        <Grid item xs={6}>
          <img src={angularLogo} alt="Logo Prime" />
            <Padrao />
            <Senha />
            <ActiveFocus />
            <SomenteLeitura />
            <Inativo />
            <Informacao />
            <Erro />
            <Sucesso />
        </Grid>
      </Grid>
    </>
  );
}
