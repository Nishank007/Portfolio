import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
 
      <Navigation/>

    </BrowserRouter>
  );
}

export default App;
