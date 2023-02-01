import Cadastro from "../pages/Cadastro";
import Mapa from "../pages/Mapa";
import Relatorio from "../pages/Relatorio";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/relatorio" component={Relatorio} />
        <Route path="/mapa" component={Mapa} />
        <Route exact path="/" component={Cadastro} />
      </Switch>
    </Router>
  );
}
