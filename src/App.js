import "./App.css";
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/HomeLayoutHOC";
import RestaurentHOC from "./HOC/RestaurentHOC";

// Component
import Temp from "./components/Temp";

// Pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurent/Overview";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurent/:id" exact>
        <Redirect to="/restaurent/:id/overview" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurentHOC path="/restaurent/:id" exact component={Temp} />
      <RestaurentHOC path="/restaurent/:id/overview" exact component={Overview} />
      <RestaurentHOC
        path="/restaurent/:id/order-online"
        exact
        component={Temp}
      />
      <RestaurentHOC path="/restaurent/:id/menu" exact component={Temp} />
      <RestaurentHOC path="/restaurent/:id/photos" exact component={Temp} />
      <RestaurentHOC path="/restaurent/:id/reviews" exact component={Temp} />
    </>
  );
}

export default App;
