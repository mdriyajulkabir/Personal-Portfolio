import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./output.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects">
      <h1 className="text-center">Ｍｙ Ｐｒｏｊｅｃｔｓ {projects.length}</h1>
      <div className="mx-auto project-card my-5">
        <div className="row ">
          {projects.map((project) => (
              <div key={project.id}
                className="col-lg-4 col sm-12 px-2 rounded-3"
                data-aos={project.dataAos}
                data-aos-duration="3000">
                <div className=" h-100" style={{}}>
                  <img
                    src={project.mokeUpImg}
                    className="card-img-top h-75 rounded-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <a
                        href={project.liveSite}
                        target="blank"
                        className="px-3 py-2 rounded noselect blue button"
                        style={{
                          border: "1px solid gray",
                          textDecoration: "none",
                        }}>
                        View Demo
                      </a>
                        <NavLink className="px-3 py-2 rounded-3 noselect blue button"  to={`/projects/${project.id}`}>Details</NavLink>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
