import WhatsAppImageAt from "../components/WhatsAppImageAt";
import CodeOptions from "../components/CodeOptions";
import Scenario from "../components/Scenario";
import "./MacBookPro.css";
import logo from './logo.png';



const MacBookPro = () => {
  return (
    <div >
      <div className="scenario">
      <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Auto Crafter</h1>
        </div>
      </header>
      
    </div>
      </div>

              <Scenario />
          
      <section className="content-element-graph">
        <WhatsAppImageAt />
        <CodeOptions />
      </section>
    </div>
  );
};

export default MacBookPro;
