import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mobmenu from "./components/Mobmenu";
import Navbar from "./components/Navbar";
import Totop from "./components/Totop";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Mobmenu />
      <Totop />
      <Switch>
        <Home />
        
      </Switch>
        <Home />
        <Home />
        <Home />

    </Router>
  );
}

export default App;
