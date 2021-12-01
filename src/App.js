import { useContext } from 'react';
import './App.css';
import Banner from './Componetns/Banner/Banner';
import ContactMe from './Componetns/ContactMe/ContactMe';
import CustomerSay from './Componetns/CustomersSay/CustomerSay';
import Header from './Componetns/Header/Header';
import MySkill from './Componetns/MySkill/MySkill';
import Toggle from './Componetns/Toggle/Toggle';
import WhatIDo from './Componetns/WhatIDo/WhatIDo';
import WhoIam from './Componetns/WhoIam/WhoIam';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode? "#222" : "white", color: darkMode && "white"}}>
      <Header></Header>
      <Toggle></Toggle>
      <Banner></Banner>  
      <WhoIam></WhoIam>
      <WhatIDo></WhatIDo>
      <MySkill></MySkill>
      <CustomerSay></CustomerSay>
      <ContactMe></ContactMe>
    </div> 
  );
}

export default App;
