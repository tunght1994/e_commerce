import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Routes/Routes";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header />
      <Routes />
    </div>
    </BrowserRouter>
  );
}

export default App;
