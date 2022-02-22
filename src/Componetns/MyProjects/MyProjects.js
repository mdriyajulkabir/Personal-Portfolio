import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import arrow from "../../Images/svg.b55e1d8a.svg";
import "./MyProjects.css";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="w-100 px-5 " id="projects">
      <h1 className="text-center my-5 py-5">
        <span className="text-primary">Ｍｙ</span>{" "}
        <span className="text-warning">Ｐｒｏｊｅｃｔｓ</span>{" "}
      </h1>
      <div>
        {projects.map((project) => (
          <div className="row w-100 px-5 mb-5 pb-5" key={project.id}>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos={project.dataAosImg}
              data-aos-easing="linear"
              data-aos-duration="2000">
              <div
                className="project-img-box"
                style={{ backgroundImage: `url(${project.mokeUpImg})` }}></div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 "
              data-aos={project.dataAos}
              data-aos-easing="linear"
              data-aos-duration="2000">
              <div className="px-2 ">
                <h3 className="fw-bolder">{project.projectName}</h3>
                <hr />
                <LightSpeed cascade>
                  <div className="d-flex">
                    <img src={arrow} alt="" />
                    <h5 className="ps-2">{project.description1}</h5>
                  </div>
                </LightSpeed>
              </div>
              <LightSpeed cascade>
                <div className="d-flex">
                  <img src={arrow} alt="" />
                  <h5 className="ps-2">{project.description2}</h5>
                </div>
              </LightSpeed>
              <Bounce left cascade>
                <div className="techlist">
                  <li>{project.item1}</li>
                  <li>{project.item2}</li>
                  <li>{project.item3}</li>
                  <li>{project?.item4}</li>
                  <li>{project.item5}</li>
                  <li>{project.item6}</li>
                  <li>{project.item7}</li>
                  <li>{project.item8}</li>
                  <li>{project.item9}</li>
                  <li>{project.item10}</li>
                </div>
              </Bounce>
              <Bounce right cascade>
                <div className="d-flex">
                  <Tooltip title="Live Site" placement="bottom-start">
                    <a
                      href={project.liveSite}
                      target="blank"
                      className="me-2 fs-3">
                      <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </Tooltip>
                  <Tooltip title="Frontend Repository" placement="bottom-start">
                    <a
                      href={project.clientLink}
                      target="blank"
                      className="me-2 fs-3">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </Tooltip>
                  {project.serverLink ? (
                    <Tooltip
                      title="Backend Repository"
                      placement="bottom-start">
                      <a
                        href={project.serverLink}
                        target="blank"
                        className="me-2 fs-3">
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </Tooltip>
                  ) : (
                    ""
                  )}
                </div>
              </Bounce>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
