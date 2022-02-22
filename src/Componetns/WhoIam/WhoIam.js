import React from "react";
import riyajul from "../../Images/IMG_4114_1_-removebg-preview.png";
const WhoIam = () => {
  return (
    <div className="my-5" id="about">
      <div className="row container-fluid">
        <div className="col-lg-5 col-sm-12  d-flex justify-content-center">
          <img className="img-fluid mx-auto" src={riyajul} alt="" />
        </div>
        <div className="col-lg-5 col-sm-12  d-flex align-items-center">
          <div className="">
            <h1 className="text-info">Riyajul Kabir Rakib</h1>
            <div className="d-flex">
              <hr
                className="rounded"
                style={{ width: "45px", padding: "2px" }}
              />
              <h4>
                A 20 Years old Bangladeshi, MERN Stack Web Developer and Self
                taught web designer.
              </h4>
            </div>
            <h5>
              I’ve always been excited with the idea of crafting something that
              people can interact with.Anyway, I am a frontend web developer
              with solid knowledge in different technologies & enough experience
              in creating & designing super responsive websites
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
