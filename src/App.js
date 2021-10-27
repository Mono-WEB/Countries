import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CardItem from "./pages/CardItem";
import Details from "./pages/Details";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/card" component={CardItem} />
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Container>

      <Footer />
    </>
  );
}

export default App;
