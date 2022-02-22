import React from "react";
import html from "../../Images/html.ec102b63.png";
import css from "../../Images/css.29013fe6.png";
import bootsrap from "../../Images/bootstrap.bab10aaa.png";
import mui from "../../Images/metarial ui.4ee24f56.png";
import tailwind from "../../Images/tailwaind.4025b9f6.png";
import js from "../../Images/javascript.png";
import react from "../../Images/react.35639ed9.png";
import expressjs from "../../Images/express.483b10d6.png";
import nodejs from "../../Images/node js.8030f6dd.png";
import mongodb from "../../Images/mongodb.70c82e5a.png";
import firebase from "../../Images/firebase.bff5748e.png";
import github from "../../Images/github.png";
import "./MySkill.css";
const MySkill = () => {
  return (
    <div className="my-5" id="skill">
      <h2 className="text-center">
        {" "}
        <span className="text-primary">Ｍｙ</span> Ｓｋｉｌｌ
      </h2>
      <hr className="w-75 mx-auto" />
      <div className="skill-img mx-auto">
        <div className="row row-cols-2 row-cols-md-4 g-2">
          <div className="col skill-icon-div">
            <div className=" h-100 rounded shadow">
              <img
                src={html}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className=" h-100 rounded shadow">
              <img
                src={css}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Css</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={bootsrap}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Bootsrap</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={mui}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Materil UI</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={tailwind}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Tailwind</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={js}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={react}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">React Js</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={expressjs}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Express Js</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={nodejs}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Node Js</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={mongodb}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mongo DB</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={firebase}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Firebase</h5>
              </div>
            </div>
          </div>
          <div className="col skill-icon-div">
            <div className="h-100 rounded shadow">
              <img
                src={github}
                className="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3 skill-icon"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">GitHub</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
