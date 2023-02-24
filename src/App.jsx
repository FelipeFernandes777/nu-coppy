import "./App.css";

import logo from "./assets/react.svg";

import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header user={"Felipe"} src={logo} alt="Foto da Pessoa" />
      <Balance />
    </div>
  );
}

export default App;
