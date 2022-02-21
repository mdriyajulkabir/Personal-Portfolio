import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch(`output.json`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log(project);
  return (
    <div>
      <Header />
      <Toggle />
      this is details {id}
    </div>
  );
};

export default Details;
