import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";


function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/cart" component={CartDetail}/>
      </Switch>
    </Container>
  );
}

export default App;
