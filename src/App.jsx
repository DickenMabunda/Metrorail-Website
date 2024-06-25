import "./App.css";
import "./app_two.css";
import Content from "./Content";
import Content_two from "./Content2";
import "./App_three.css";
import Content_Four from "./content4";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pta_Pinnars from "./pretorialist/ptaPinnars";
import Pta_Mabop from "./pretorialist/ptaMabopane";
import Pta_Gardens from "./pretorialist/ptaGardens";
import Pta_Saulsville from "./pretorialist/ptasaulsville";
import Pta_Irene from "./pretorialist/ptaIrene";
import Pta_Deweldt from "./pretorialist/ptaDewildt";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="app-content">
            <Switch>
              <Route exact path="/">
                <Content />
                <Content_two />
                <Content_Four />
              </Route>
              <Route path="/ptaPinnars">
                <Pta_Pinnars />
              </Route>
              <Route path="/ptaMabopane">
                <Pta_Mabop />
              </Route>
              <Route path="/ptaGardens">
                <Pta_Gardens />
              </Route>
              <Route path="/ptaSauseville">
                <Pta_Saulsville />
              </Route>
              <Route path="/ptaIrene">
                <Pta_Irene />
              </Route>
              <Route path="/ptaDewildt">
                <Pta_Deweldt />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
