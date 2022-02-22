import React from "react";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import CustomerSay from "../CustomersSay/CustomerSay";
import Header from "../Header/Header";
import MyProjects from "../MyProjects/MyProjects";
import MySkill from "../MySkill/MySkill";
import Toggle from "../Toggle/Toggle";
import WhatIDo from "../WhatIDo/WhatIDo";
import WhoIam from "../WhoIam/WhoIam";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Toggle></Toggle>
      <Banner></Banner>
      <WhoIam></WhoIam>
      <WhatIDo></WhatIDo>
      <MySkill></MySkill>

      <MyProjects />
      <CustomerSay></CustomerSay>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
