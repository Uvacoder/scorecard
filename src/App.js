import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
