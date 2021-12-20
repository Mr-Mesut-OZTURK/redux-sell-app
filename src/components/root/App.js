import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <>

      <Navi />

      <Container>
        <Switch>

          <Route path="/" exact component={Dashboard} />
          <Route path="/product" component={Dashboard} />

          <Route path="/cart" component={CartDetail} />

          <Route path="/saveproduct" exact component={AddOrUpdateProduct} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />

          <Route component={NotFound} />

        </Switch>
      </Container>
    </>
  );
}

export default App;
